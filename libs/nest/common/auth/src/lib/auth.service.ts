/**
 * TODO 将权限 rule 作为 jwt payload 一部分
 */

import { SecurityConfig } from '@neonse/nest-common-configs'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaService } from '@neonse/nest-common-prisma'
import { SMSService } from '@neonse/nest-common-sms'
import { UsersService } from '@neonse/nest-common-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import * as _ from 'lodash'
import dayjs = require('dayjs')

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private usersService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
        private configService: ConfigService,
        private sms: SMSService,
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

    async validateUser(email: string, password: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                password: true,
            },
        })

        if (user) {
            const isMatch = await this.passwordService.validatePassword(password, user.password)
            if (!isMatch)
                throw new HttpException(
                    {
                        key: 'auth.USER_CREDENTIALS_WRONG',
                    },
                    HttpStatus.UNAUTHORIZED,
                )
            return this.prisma.user.findUnique({
                where: {
                    id: user.id,
                },
            })
        }
        return null
    }
    /**
     * 根据 accessToken 验证用户
     */
    async validateUserWithAccessToken(accessToken: string) {
        const result = this.jwtService.verify(accessToken, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
        })

        if (result?.userId) {
            return this.usersService.findUser(result.userId)
        } else {
            throw new HttpException(
                {
                    key: 'auth.ACCESSTOKEN_WRONG',
                },
                HttpStatus.UNAUTHORIZED,
            )
        }
    }

    /** 注册 */

    async register(email: string, password: string, name: string) {
        const isExisting = await this.usersService.isUserExisting({ email })
        if (isExisting)
            throw new HttpException(
                {
                    key: 'auth.USER_ALREADY_EXISTS_EMAIL',
                    args: { email },
                },
                HttpStatus.CONFLICT,
            )
        const hashedPassword = await this.passwordService.hashPassword(password)
        const lastLoginAt = dayjs().format()

        // 自动随机生成用户名

        const username = email.split('@')[0] + _.random(9) + _.random(9) + _.random(9)

        return this.usersService.createUser({
            email,
            username,
            password: hashedPassword,
            profile: {
                create: {
                    name,
                },
            },
            lastLoginAt,
        })
    }

    /** 手机注册
     * @param mobile 手机号码
     * @param code 收到的短信验证码
     */

    async registerWithMobile(mobile: string, code: string) {
        const isExisting = await this.usersService.isUserExisting({ mobile })
        if (isExisting)
            throw new HttpException(
                {
                    key: 'auth.USER_ALREADY_EXISTS_MOBILE',
                    args: {
                        mobile,
                    },
                },
                HttpStatus.CONFLICT,
            )

        return this.sms.confirmMobileNumber(mobile, code)
    }
}
