import { RequestWithUser } from '@neonse/nest-common-shared'
import { UsersService } from '@neonse/nest-common-users'
import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common'
import * as dayjs from 'dayjs'
import { AuthService } from './auth.service'
import { JwtRefreshGuard } from './guards/jwt-refresh.guard'
import { JwtAuthGuard } from './guards/jwt.guard'
import { LocalAuthGuard } from './guards/local.guard'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UsersService) {}

    @Post('register')
    async register(@Body() data: { email: string; password: string; username?: string }) {
        const { email, password, username } = data
        return await this.authService.register(email, password, username)
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

        return await this.usersService.updateUser(
            { id: user.id },
            {
                accessToken,
                lastLoginAt,
            },
        )
    }

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
     * 重新生成 token
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
