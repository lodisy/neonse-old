/**
 * TODO 将权限 rule 作为 jwt payload 一部分
 */

import { SecurityConfig } from '@neonse/nest-common-configs'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { UsersService } from '@neonse/nest-common-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import dayjs = require('dayjs')

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

    /** 返回 cookie 和 token */

    getCookieAndAccessToken(userId: string) {
        const token = this.generateAccessToken({ userId })
        const cookie = `Access=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<string>(
            'security.expiresIn',
        )}`
        return {
            accessToken: token,
            accessCookie: cookie,
        }
    }

    getCookieAndRefreshToken(userId: string) {
        const token = this.generateRefreshToken({ userId })
        const cookie = `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get<string>(
            'security.refreshIn',
        )}`
        return {
            refreshToken: token,
            refreshCookie: cookie,
        }
    }

    getCookieWhenLogout() {
        return ['Access=; HttpOnly; Path=/; Max-Age=0', 'Refresh=; HttpOnly; Path=/; Max-Age=0']
    }

    /** 验证用户密码是否一致，若符合返回 user 放入 Request (by passport) */

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
            })
        }
        return null
    }

    /** 注册 */

    async register(email: string, password: string, username?: string) {
        const isExisting = await this.usersService.isUserExisting({ email })
        if (isExisting) throw new HttpException(`用户 ${email} 已存在`, HttpStatus.CONFLICT)
        const hashedPassword = await this.passwordService.hashPassword(password)
        const lastLoginAt = dayjs().format()
        return await this.usersService.createUser({
            email,
            password: hashedPassword,
            username,
            lastLoginAt,
        })
    }

    /** 手机注册 */

    async registerWithMobile(mobile: string, code: string) {}
}
