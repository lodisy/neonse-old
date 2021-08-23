import { SecurityConfig } from '@neonse/nest-common-configs'
import { User } from '@neonse/nest-common-graphql'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UsersService } from '@neonse/nest-common-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private usersService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    /** 根据 email 生成 jwt */
    private generateJwtToken(payload: { email: string }): string {
        return this.jwtService.sign(payload)
    }

    /** 根据 email 生成 refresh token */

    private generateRefreshToken(payload: { email: string }): string {
        const securityConfig = this.configService.get<SecurityConfig>('security')

        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: securityConfig.refreshIn,
        })
    }

    /** 生成 identifierToken 类似 fingerpring */
    // TODO

    /** 批量生成多个 tokens */

    generateTokens(payload: { email: string }) {
        return {
            jwtToken: this.generateJwtToken(payload),
            refreshToken: this.generateRefreshToken(payload),
        }
    }

    /** 刷新 jwt 和 refreshToken */

    refreshTokens(jwt: string) {
        try {
            const user = this.jwtService.verify(jwt, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            }) as User
            return this.generateTokens({ email: user.email })
        } catch (error) {
            throw new HttpException('Error', HttpStatus.UNAUTHORIZED)
        }
    }

    /** 验证用户密码是否一致，若符合返回 user */

    async validateUser(email: string, password: string) {
        const isExisting = await this.prisma.user.findFirst({
            where: {
                email,
            },
            select: {
                id: true,
                email: true,
            },
        })

        if (!isExisting) throw new HttpException('User not existing', HttpStatus.NOT_FOUND)

        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
            },
        }) // 只取 id 和 password

        const isMatch = await this.passwordService.validatePassword(password, user.password)

        if (!isMatch) throw new HttpException('User credentials are not valid', HttpStatus.UNAUTHORIZED)

        return await this.prisma.user.findUnique({
            where: {
                id: user.id,
            },
            select: {
                id: true,
                email: true,
                username: true,
            },
        }) // 返回 User 不含 password
    }

    /** 登入 */

    async signIn(email: string, password: string) {
        const validateUser = await this.validateUser(email, password)

        if (!validateUser) {
            throw new HttpException('User credentials do not match', HttpStatus.UNAUTHORIZED)
        }

        // 是否每次登入都要生成 jwtToken

        const tokens = this.generateTokens({ email })

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
