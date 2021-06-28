import { PasswordService } from '@neonse/password'
import { PrismaService } from '@neonse/prisma'
import { UsersService } from '@neonse/users'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Prisma, User } from '@prisma/client'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private usersService: UsersService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private passwordService: PasswordService,
    ) {}

    private generateJwtToken(payload: { userId: string }): string {
        return this.jwtService.sign(payload)
    }

    // generateTokens(payload: { userId: string }) {
    //     return {
    //         generateJwtToken(payload),
    //         generateJwtToken(payload)
    //     }
    // }

    /** Login */

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } })
        if (!user) {
            throw new NotFoundException(`No user found for email: ${email}`)
        }
        const validPassword = await this.passwordService.validatePassword(password, user.password)

        if (!validPassword) {
            throw new BadRequestException('Invalid password')
        }

        // this.prisma.user.update?
        // 每次登入都调用？jwt 应该不变

        const jwtToken = this.generateJwtToken({
            userId: user.id,
        })

        await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                jwtToken,
            },
        })

        console.log('jwtToken', jwtToken)

        return jwtToken // 登入后返回 jwtToken
    }

    /** Check user if existing */

    async validateUser(userId: string): Promise<User> {
        try {
            const result = await this.prisma.user.findUnique({ where: { id: userId } })
            return result
        } catch (err) {
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                if (err.code === 'P2001') {
                    console.log('User not existing')
                }
            }
            throw err
        }
    }
}
