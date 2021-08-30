/**
 *
 */

import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        private passwordService: PasswordService,
        private configService: ConfigService,
    ) {}

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
            const user = await this.prisma.user.findUnique({
                where: {
                    id,
                },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    createdAt: true,
                },
            })

            return user
        } else {
            throw new HttpException(`The user you are looking for does not exist`, HttpStatus.NOT_FOUND)
        }
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

    /** admin 修改用户密码 */

    async changePasswordAdmin(email: string, newPassword: string) {
        // 给新密码加密
        const hashedPassword = await this.passwordService.hashPassword(newPassword)
        // 更新
        const updatedUser = await this.prisma.user.update({
            where: {
                email,
            },
            data: {
                password: hashedPassword,
            },
        })

        return {
            status: 'success',
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                username: updatedUser.username,
                jwtToken: updatedUser.jwtToken,
                createdAt: updatedUser.createdAt,
                updatedAt: updatedUser.updatedAt,
            },
        }
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
