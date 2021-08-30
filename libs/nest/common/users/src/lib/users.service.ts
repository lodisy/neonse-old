/**
 *
 */

import { SecurityConfig } from '@neonse/nest-common-configs'
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
        if (isExisting) {
            return await this.prisma.user.findUnique({
                where: {
                    id,
                },
            })
        } else {
            throw new HttpException(`The user you are looking for does not exist`, HttpStatus.NOT_FOUND)
        }
    }

    async findUserByRefreshToken(refreshToken: string, id: string) {
        const user = await this.findUser(id)
        const isMatch = await compare(refreshToken, user.refreshToken)

        if (!isMatch) throw new HttpException('refresh token 不一致', HttpStatus.UNAUTHORIZED)

        return user
    }

    /** 创建用户 */

    async createUser(data: Prisma.UserCreateInput) {
        const { email, password } = data

        const isExisting = await this.isUserExisting({ email })

        if (isExisting) throw new HttpException(`User with ${email} already exists`, HttpStatus.OK)

        const hashedPassword = await this.passwordService.hashPassword(password)

        //const tokens = this.generateTokens({ email })

        const user = await this.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                ...data,
                //roles:
            },
        })

        return {
            status: 'success',
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                jwtToken: user.jwtToken,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            },
        }
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
        const isExisting = await this.isUserExisting(where)

        if (!isExisting) throw new HttpException(`User does not exist`, HttpStatus.NOT_FOUND)

        const user = await this.prisma.user.update({
            where,
            data: {
                username: data.username,
            },
            include: {
                profile: true,
            },
        })

        // TODO
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
