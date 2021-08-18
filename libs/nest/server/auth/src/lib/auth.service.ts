import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UsersService } from '@neonse/nest-admin-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private usersService: UsersService,
        private passwordService: PasswordService,
    ) {}

    /** 验证用户密码是否一致，若符合返回 email */

    async validateUser(email: string, password: string) {
        const isUserExisting = await this.usersService.isUserExisting({ email })

        if (!isUserExisting) throw new HttpException('User not existing', HttpStatus.NOT_FOUND)

        const user = await this.prisma.user.findUnique({
            where: { email },
        })

        const isMatch = await this.passwordService.validatePassword(password, user.password)

        if (!isMatch) return null

        return {
            email: user.email,
        }
    }

    /** 登入 */

    async signIn(email: string, password: string) {
        const validateUser = await this.validateUser(email, password)

        if (!validateUser) {
            throw new HttpException('User credentials do not match', HttpStatus.UNAUTHORIZED)
        }

        // 是否每次登入都要生成 jwtToken

        const tokens = this.usersService.generateTokens({ email })

        const user = await this.prisma.user.update({
            where: { email },
            data: {
                jwtToken: tokens.jwtToken,
            },
        })

        return {
            status: 'success',
            user: {
                id: user.id,
                email: user.email,
                jwtToken: user.jwtToken,
            },
        }
    }

    /** 注册 */

    async signUp(email: string, password: string, username?: string) {
        return await this.usersService.createUser({ email, password, username })
    }
}
