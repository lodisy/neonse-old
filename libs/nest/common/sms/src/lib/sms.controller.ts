/**
 * TODO 权限
 */

import { Body, Controller, Get, Post } from '@nestjs/common'
import { SMSService } from './sms.service'
@Controller()
export class SMSController {
    constructor(private sms: SMSService) {}

    /**
     * 发送短信
     */

    @Post('sendSMS')
    async sendSMS(@Body() mobile: string) {
        return await this.sms.sendSMS(mobile)
    }

    /**
     * 后台获取统计信息
     */

    @Get('sms')
    async getSMSStatics() {
        return await this.sms.getSMSStatics()
    }
}
