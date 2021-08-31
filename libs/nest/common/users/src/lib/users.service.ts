/**
 *
 */
import { SecurityConfig } from '@neonse/nest-common-configs'
import { FilesService } from '@neonse/nest-common-files'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@prisma/client'
import { compare, hash } from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private passwordService: PasswordService,
        private configService: ConfigService,
        private filesService: FilesService,
    ) {}

    get bcryptSaltRounds(): string | number {
        const securityConfig = this.configService.get<SecurityConfig>('security')
        const saltOrRounds = securityConfig.bcryptSaltOrRound

        return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds
    }

    /** 验证用户是否存在 */

    async isUserExisting(data: Prisma.UserWhereUniqueInput): Promise<boolean> {
        const targetUser = await this.prisma.user.findFirst({
            where: data,
        })
        if (!targetUser) {
            return false
        } else return true
    }

    /** 查询用户 */

    async findUser(id: string) {
        const isExisting = await this.isUserExisting({ id })
        if (!isExisting) throw new HttpException('用户不存在', HttpStatus.NOT_FOUND)

        return await this.prisma.user.findUnique({
            where: {
                id,
            },
            select: {
                id: true,
                email: true,
                username: true,
                mobile: true,
                accessToken: true,
                refreshToken: true,
                isEmailConfirmed: true,
                isMobileConfirmed: true,
                lastLoginAt: true,
                lastLogoutAt: true,
            },
        })
    }

    async findUserByRefreshToken(refreshToken: string, id: string) {
        const user = await this.findUser(id)
        const isMatch = await compare(refreshToken, user.refreshToken)

        if (!isMatch) throw new HttpException('refresh token 不一致', HttpStatus.UNAUTHORIZED)

        return user
    }

    /** 创建用户 */

    async createUser(data: Prisma.UserCreateInput) {
        return await this.prisma.user.create({
            data,
            select: {
                id: true,
                email: true,
                username: true,
                mobile: true,
                accessToken: true,
                refreshToken: true,
                isEmailConfirmed: true,
                isMobileConfirmed: true,
                lastLoginAt: true,
                lastLogoutAt: true,
            },
        })
    }

    /** 设置 refreshToken */

    async setRefreshToken(refreshToken: string, where: Prisma.UserWhereUniqueInput) {
        const hashedToken = await hash(refreshToken, this.bcryptSaltRounds)
        await this.prisma.user.update({
            where,
            data: {
                refreshToken: hashedToken,
            },
        })
    }

    /** 清空 refreshToken */

    async removeRefreshToken(where: Prisma.UserWhereUniqueInput) {
        await this.prisma.user.update({
            where,
            data: {
                refreshToken: null,
            },
        })
    }

    /** 修改用户资料（非密码） */

    /** 修改用户资料（非密码、非邮箱），包括 profile */

    async updateUser(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
        return await this.prisma.user.update({
            where,
            data,
            select: {
                id: true,
                email: true,
                username: true,
                mobile: true,
                accessToken: true,
                refreshToken: true,
                isEmailConfirmed: true,
                isMobileConfirmed: true,
                lastLoginAt: true,
                lastLogoutAt: true,
            },
        })
    }

    /** 修改头像 */

    async updateAvatar(where: Prisma.UserWhereUniqueInput, image: Express.Multer.File) {
        const isExisting = await this.isUserExisting(where)
        if (!isExisting) throw new HttpException('用户不存在', HttpStatus.NOT_FOUND)

        const avatar = await this.filesService.uploadImage(image)
        // TODO
        await this.updateUser(where, {
            profile: {
                update: {
                    avatar,
                },
            },
        })
    }

    /** 修改密码 */

    async changePassword(id: string, currentPassword: string, newPassword: string) {
        const user = await this.prisma.user.findUnique({ where: { id } })

        // 先判断当前密码是否正确
        const validPassword = await this.passwordService.validatePassword(currentPassword, user.password)

        if (!validPassword) throw new HttpException('Password is wrong', HttpStatus.UNAUTHORIZED)

        // 给新密码加密
        const hashedPassword = await this.passwordService.hashPassword(newPassword)

        // 更新
        const updatedUser = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password: hashedPassword,
            },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            },
        })

        return {
            status: 'success',
            user: updatedUser,
        }
    }

    /** 删除用户 */

    async deleteUser(email: string) {
        await this.prisma.user.delete({
            where: { email },
        })

        return {
            status: 'deleted',
        }
    }
}
