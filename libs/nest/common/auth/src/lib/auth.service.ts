/**
 * TODO 将权限 rule 作为 jwt payload 一部分
 */

import { SecurityConfig } from '@neonse/nest-common-configs'
import { User } from '@neonse/nest-common-graphql'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UsersService } from '@neonse/nest-common-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import * as dayjs from 'dayjs'

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private usersService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    /** 根据 userId 生成 jwt */
    private generateAccessToken(payload: { userId: string }): string {
        return this.jwtService.sign(payload)
    }

    /** 根据 userId 生成 refresh token */

    private generateRefreshToken(payload: { userId: string }): string {
        const securityConfig = this.configService.get<SecurityConfig>('security')

        return this.jwtService.sign(payload, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: securityConfig.refreshIn,
        })
    }

    /** 生成 identifierToken 类似 fingerpring */
    // TODO

    generateTokens(payload: { userId: string }) {
        return {
            accessToken: this.generateAccessToken(payload),
            refreshToken: this.generateRefreshToken(payload),
        }
    }

    /** 刷新 jwt 和 refreshToken */

    refreshTokens(jwt: string) {
        try {
            const user = this.jwtService.verify(jwt, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
            }) as User
            return this.generateTokens({ userId: user.id })
        } catch (error) {
            throw new HttpException('Error', HttpStatus.UNAUTHORIZED)
        }
    }

    /** 返回 Cookie 头 */

    getCookieWithAccessToken(userId: string) {
        const token = this.generateAccessToken({ userId })
        return `Access=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<string>('security.expiresIn')}`
    }

    getCookieWithRefreshToken(userId: string) {
        const token = this.generateRefreshToken({ userId })
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<string>(
            'security.refreshIn',
        )}`
        return {
            cookie,
            token,
        }
    }

    getCookieWhenLogout() {
        return ['Access=; HttpOnly; Path=/; Max-Age=0', 'Refresh=; HttpOnly; Path=/; Max-Age=0']
    }

    /** 验证用户密码是否一致，若符合返回 user */

    async validateUser(email: string, password: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
            },
        })

        if (user) {
            const isMatch = await this.passwordService.validatePassword(password, user.password)
            if (!isMatch) throw new HttpException('帐号或密码错误哦', HttpStatus.UNAUTHORIZED)
            return await this.prisma.user.findUnique({
                where: {
                    id: user.id,
                },
                select: {
                    id: true,
                    email: true,
                    username: true,
                },
            })
        }

        return null
    }

    /** 登入 */

    async login(email: string, password: string) {
        const validateUser = await this.validateUser(email, password)

        if (!validateUser) {
            throw new HttpException('用户不存在', HttpStatus.NOT_FOUND)
        }

        const tokens = this.generateTokens({ userId: validateUser.id })

        const lastLoginAt = dayjs().format()

        const user = await this.prisma.user.update({
            where: { email },
            data: {
                accessToken: tokens.accessToken, // TODO
                lastLoginAt,
            },
        })

        return {
            status: 'success',
            user: {
                id: user.id,
                email: user.email,
                accessToken: user.accessToken, // TODO
            },
        }
    }

    /** 注册 */

    async register(email: string, password: string, username?: string) {
        return await this.usersService.createUser({ email, password, username })
    }
}
