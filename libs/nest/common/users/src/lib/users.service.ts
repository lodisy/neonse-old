/**
 *
 */
import { SecurityConfig } from '@neonse/nest-common-configs'
import { COSService } from '@neonse/nest-common-cos'
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
        private cosService: COSService,
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
        if (!isExisting)
            throw new HttpException(
                {
                    key: 'users.USER_NOT_FOUND',
                },
                HttpStatus.NOT_FOUND,
            )

        return this.prisma.user.findUnique({
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
                profile: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
            },
        })
    }

    async findUserByRefreshToken(refreshToken: string, id: string) {
        const user = await this.findUser(id)
        const isMatch = await compare(refreshToken, user.refreshToken)

        if (!isMatch)
            throw new HttpException(
                {
                    key: 'user.REFRESH_TOKEN_WRONG',
                },
                HttpStatus.UNAUTHORIZED,
            )

        return user
    }

    /** 创建用户 */

    async createUser(data: Prisma.UserCreateInput) {
        return this.prisma.user.create({
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
                profile: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
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
        return this.prisma.user.update({
            where,
            data,
        })
    }

    /** 修改头像 */
    async updateAvatar(id: string, image: Express.Multer.File) {
        const isExisting = await this.isUserExisting({ id })
        if (!isExisting)
            throw new HttpException(
                {
                    key: 'users.USER_NOT_FOUND',
                },
                HttpStatus.NOT_FOUND,
            )
        const user = await this.findUser(id)
        // 删除原文件
        if (user.profile.avatar) {
            await this.filesService.deleteFile({
                id: user.profile.avatar.id,
            })
            await this.prisma.profile.update({
                where: {
                    id: user.profile.id,
                },
                data: {
                    avatar: undefined,
                },
            })

            await this.cosService.deleteFile(user.profile.avatar.name)
        }
        const avatar = await this.filesService.uploadImage(image)
        await this.prisma.profile.update({
            where: {
                id: user.profile.id,
            },
            data: {
                avatar: {
                    connect: {
                        id: avatar.id,
                    },
                },
            },
        })

        return avatar
    }

    /** 修改密码 */

    async changePassword(id: string, currentPassword: string, newPassword: string) {
        const user = await this.prisma.user.findUnique({ where: { id } })

        // 先判断当前密码是否正确
        const validPassword = await this.passwordService.validatePassword(currentPassword, user.password)

        if (!validPassword)
            throw new HttpException(
                {
                    key: 'users.PASSWORD_WRONG',
                },
                HttpStatus.UNAUTHORIZED,
            )

        // 给新密码加密
        const hashedPassword = await this.passwordService.hashPassword(newPassword)

        // 更新
        return this.prisma.user.update({
            where: {
                id,
            },
            data: {
                password: hashedPassword,
            },
        })
    }

    /** 删除用户 */

    async deleteUser(email: string) {
        await this.prisma.user.delete({
            where: { email },
            include: {
                profile: true,
            },
        })

        return {
            status: 'deleted',
        }
    }
}
