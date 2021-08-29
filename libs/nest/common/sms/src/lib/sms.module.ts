import { Module } from '@nestjs/common'
import { SMSController } from './sms.controller'
import { SMSService } from './sms.service'

@Module({
    controllers: [SMSController],
    providers: [SMSService],
    exports: [SMSService],
})
export class SMSModule {}
