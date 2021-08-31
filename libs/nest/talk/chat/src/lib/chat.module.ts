import { AuthModule } from '@neonse/nest-common-auth'
import { Module } from '@nestjs/common'
import { ChatGateway } from './chat.gateway'

@Module({
    imports: [AuthModule],
    controllers: [],
    providers: [ChatGateway],
    exports: [],
})
export class ChatModule {}
