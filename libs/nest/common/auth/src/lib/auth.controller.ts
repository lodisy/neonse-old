import { JwtAuthGuard, JwtRefreshGuard, LocalAuthGuard, RequestWithUser } from '@neonse/nest-common-shared'
import { UsersService } from '@neonse/nest-common-users'
import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common'
import * as dayjs from 'dayjs'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    /**
     * 注册
     *
     */
    @Post('register')
    async register(@Body() data: { email: string; password: string; name: string }) {
        const { email, password, name } = data
        return this.authService.register(email, password, name)
    }

    @Post('mobile/register')
    async registerWithMobile(@Body() data: { mobile: string; code: string }) {
        const { mobile, code } = data
        return this.authService.registerWithMobile(mobile, code)
    }

    /**
     * 登入成功后，服务器返回 cookie 给客户端
     */

    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Req() request: RequestWithUser) {
        const { user } = request

        const { accessToken, accessCookie } = this.authService.getCookieAndAccessToken(user.id)
        const { refreshToken, refreshCookie } = this.authService.getCookieAndRefreshToken(user.id)
        request.res.setHeader('Set-Cookie', [accessCookie, refreshCookie])

        await this.usersService.setRefreshToken(refreshToken, { id: user.id })

        const lastLoginAt = dayjs().format()

        return this.usersService.updateUser(
            { id: user.id },
            {
                accessToken,
                lastLoginAt,
            },
        )
    }

    //  @Post('mobile/login')

    /**
     * 登出
     */

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async logout(@Req() request: RequestWithUser) {
        const { user } = request
        // 清空 cookie
        request.res.setHeader('Set-Cookie', this.authService.getCookieWhenLogout())
        // 清空 refreshToken
        await this.usersService.removeRefreshToken({ id: user.id })
        await this.usersService.updateUser(
            { id: user.id },
            {
                lastLogoutAt: dayjs().format(),
            },
        )
    }

    /**
     * 在登入的情况下刷新 accessToken
     */

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    async refresh(@Req() request: RequestWithUser) {
        const { user } = request
        const { accessCookie, accessToken } = this.authService.getCookieAndAccessToken(user.id)
        request.res.setHeader('Set-Cookie', accessCookie)
        const result = await this.usersService.updateUser({ id: user.id }, { accessToken })
        return result
    }
}
