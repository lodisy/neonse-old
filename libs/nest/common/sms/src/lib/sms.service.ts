import { Injectable } from '@nestjs/common'
import { TencentSmsService } from 'nestjs-tencent-sms'

// TODO https://github.com/ShmmGood/nestjs-tencent-sms

@Injectable()
export class SMSService {
    constructor(private readonly sms: TencentSmsService) {}

    async sendSMS(template: string) {
        const client = await this.sms.sendSms('phone', 'new_code', '2')

        return client.Code === 'Ok'
    }
}
