import { UserCreateWithoutProfileInput } from '@neonse/graphql'
import { PrismaService } from '@neonse/prisma'
import { BadRequestException, Injectable } from '@nestjs/common'
import { Prisma, User } from '@prisma/client'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    /** 注册帐号 */

    async register(data: UserCreateWithoutProfileInput): Promise<User> {
        const { email, password } = data

        const result = await this.prisma.user.findFirst({
            where: {
                email,
            },
        })

        if (result?.id) {
            throw new BadRequestException(`User registration faild, ${result.email} is already existed`)
        }

        // 生成 jwt

        const jwtToken = ''

        const user = await this.prisma.user.create({
            data: {
                email,
                password,
                jwtToken,
            },
        })
    }

    async getUser(email: string) {
        try {
            const result = await this.prisma.user.findFirst({ where: { email } })
            return result
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === 'P2001') {
                    console.log('User not existing')
                }
            }
            throw e
        }
    }
}
