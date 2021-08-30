import { UsersModule } from '@neonse/nest-common-users'
import { Module } from '@nestjs/common'
import { SMSController } from './sms.controller'
import { SMSService } from './sms.service'

@Module({
    imports: [UsersModule],
    controllers: [SMSController],
    providers: [SMSService],
    exports: [SMSService],
})
export class SMSModule {}
