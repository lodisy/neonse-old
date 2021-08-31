import { AuthService } from '@neonse/nest-common-auth'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { WsException } from '@nestjs/websockets'
import { parse } from 'cookie'
import { Socket } from 'socket.io'

@Injectable()
export class WsJwtGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        let client: Socket
        try {
            client = context.switchToWs().getClient<Socket>()
            const cookies = client.handshake.headers.cookie
            const { Access: accessToken } = parse(cookies)
            const currentUser = await this.authService.validateUserWithAccessToken(accessToken)
            return Boolean(currentUser)
        } catch (err) {
            client.emit('Unauthorized', '用户信息校验失败,请重新登录!')
            client.disconnect()
            throw new WsException(err.message)
        }
    }
}
