import { SubscribeMessage, WebSocketGateway, WebSocketServer, ConnectedSocket } from '@nestjs/websockets'
import * as WebSocket from 'ws'

@WebSocketGateway(5555)
export class ChatGateway {
    @WebSocketServer()
    server: WebSocket.Server

    async handleConnection(@ConnectedSocket() client: WebSocket) {
        console.log('CONNECT')
        client.send('hello from client')
    }

    @SubscribeMessage('message')
    handleMessage(client: WebSocket, payload: any): string {
        return 'Hello world!'
    }

    @SubscribeMessage('terminate')
    onTerminate(client: any, data: any): any {
        console.log(data)
        console.log('terminate')
    }
}
