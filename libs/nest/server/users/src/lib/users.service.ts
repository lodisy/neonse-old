import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserService {
    constructor(
        private prisma: PrismaService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
    ) {}

    /** 根据 email 生成 jwt */
    private generateJwtToken(payload: { email: string }): string {
        return this.jwtService.sign(payload)
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

    /** 创建用户（注册用） */

    async createUser(email: string, password: string, username?: string) {
        const isExisting = await this.isUserExisting({ email })

        if (isExisting) throw new HttpException(`User with ${email} already exists`, HttpStatus.OK)

        const hashedPassword = await this.passwordService.hashPassword(password)

        const user = this.prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword,
                jwtToken: this.generateJwtToken({ email }),
            },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
            },
        })

        return {
            status: 'Success',
            user,
        }
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

            return {
                status: 'success',
                user,
            }
        } else {
            throw new HttpException(`The user you are looking for does not exist`, HttpStatus.NOT_FOUND)
        }
    }

    /** 修改用户资料（非密码、非邮箱），包括 profile */

    async updateUser(
        id: string,
        data: Pick<Prisma.UserCreateInput, 'username'> & Pick<Prisma.ProfileCreateInput, 'name'>,
    ) {
        const isExisting = await this.isUserExisting({ id })

        if (!isExisting) throw new HttpException(`User does not exist`, HttpStatus.NOT_FOUND)

        const user = await this.prisma.user.update({
            where: {
                id,
            },
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

    /** 修改 email */

    async changeEmail(id: string, newEmail: string) {
        //TODO
    }
}
