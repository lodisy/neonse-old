import { RequestWithUser } from '@neonse/nest-common-shared'
import { UsersService } from '@neonse/nest-common-users'
import { Body, Controller, Get, HttpCode, Post, Req, Res, UseGuards } from '@nestjs/common'
import * as dayjs from 'dayjs'
import { Response } from 'express'
import { AuthService } from './auth.service'
import { JwtRefreshGuard } from './guards/jwt-refresh.guard'
import { JwtAuthGuard } from './guards/jwt.guard'

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
    async login(@Req() request: RequestWithUser, @Res() response: Response) {
        const accessCookie = this.authService.getCookieWithAccessToken(request.user.id)
        const { cookie: refreshCookie, token: refreshToken } = this.authService.getCookieWithRefreshToken(
            request.user.id,
        )

        await this.usersService.setRefreshToken(refreshToken, { id: request.user.id })

        // response.cookie('auth-cookie', cookie,)
        response.setHeader('Set-Cookie', [accessCookie, refreshCookie])

        const { user } = await this.authService.login(request.user.email, request.user.password)
        return response.send(user)
    }

    /**
     * 登出
     */

    @Post('logout')
    @UseGuards(JwtAuthGuard)
    @HttpCode(200)
    async logout(@Req() request: RequestWithUser, @Res() response: Response) {
        // 清空 cookie
        response.setHeader('Set-Cookie', this.authService.getCookieWhenLogout())
        // 清空 refreshToken
        await this.usersService.removeRefreshToken({ id: request.user.id })
        await this.usersService.updateUser(
            { id: request.user.id },
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
    refresh(@Req() request: RequestWithUser) {
        const accessCookie = this.authService.getCookieWithAccessToken(request.user.id)
        request.res.setHeader('Set-Cookie', accessCookie)
        return request.user
    }
}
