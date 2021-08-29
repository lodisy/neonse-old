/**
 * TODO 权限
 */

import { Body, Controller, Get, HttpException, HttpStatus, Post, Req } from '@nestjs/common'
import { SMSService } from './sms.service'
@Controller()
export class SMSController {
    constructor(private sms: SMSService) {}

    /**
     * 发送短信
     */

    @Post('sendSMS')
    async sendSMS(@Req() request, @Body() mobile: string) {
        if (request.user.isMobileConfirmed) {
            throw new HttpException('已经验证', HttpStatus.BAD_REQUEST)
        }
        return await this.sms.sendSMS(mobile)
    }

    /**
     * 验证短信
     * @returns
     */

    @Post('validateSMS')
    async validateSMS(@Req() request, @Body() code: string) {
        // request 中包含 user
        if (request.user.isMobileConfirmed) {
            throw new HttpException('已经验证', HttpStatus.BAD_REQUEST)
        }
        await this.sms.confirmMobileNumber(request.user.mobile, code)
    }

    /**
     * 后台获取统计信息
     */

    @Get('sms')
    async getSMSStatics() {
        return await this.sms.getSMSStatics()
    }
}
