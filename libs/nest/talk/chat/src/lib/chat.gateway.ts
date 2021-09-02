import { AuthService } from '@neonse/nest-common-auth'
import { WsJwtGuard } from '@neonse/nest-common-shared'
import { UseGuards } from '@nestjs/common'
import {
    ConnectedSocket,
    MessageBody,
    OnGatewayConnection,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsException,
} from '@nestjs/websockets'
import { parse } from 'cookie'
import { Server, Socket } from 'socket.io'
import { ChatService } from './chat.service'

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection {
    @WebSocketServer()
    server: Server

    constructor(private chatService: ChatService, private authService: AuthService) {}

    /** 连接 */
    async handleConnection(client: Socket) {
        const cookies = client.handshake.headers.cookie
        const { Access: accessToken } = parse(cookies)
        const currentUser = await this.authService.validateUserWithAccessToken(accessToken)
        if (!currentUser) {
            client.emit('error', new WsException('Error'))
            client.disconnect()
        }
        client.data.user = currentUser // 赋值 user
        return 'Connect'
    }

    /** 断开 */
    async handleDisconnection(client: Socket) {
        client.disconnect()
        return 'Disconnected'
    }

    /** 发送私聊消息 */
    @SubscribeMessage('sendMessage')
    @UseGuards(WsJwtGuard)
    async sendMessage(@ConnectedSocket() client: Socket, @MessageBody() content: string) {
        return this.chatService.sendMessage({
            content,
            by: client.data.user,
        })
    }
}
