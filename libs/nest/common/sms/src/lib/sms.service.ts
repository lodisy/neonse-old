import { SMSConfig } from '@neonse/nest-common-configs'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { sms } from 'tencentcloud-sdk-nodejs'

@Injectable()
export class SMSService {
    private sms = new sms.v20210111.Client({
        ...this.configService.get<SMSConfig>('sms'),
    })
    constructor(private readonly configService: ConfigService) {}

    /**
     * 发送短信
     * @param mobile 手机号
     * @param code 模版验证吗
     * @param minute 模版过期时间
     */

    async sendSMS(mobile: string) {
        return await this.sms
            .SendSms({
                PhoneNumberSet: [`+86${mobile}`], // 判断国家
                SmsSdkAppId: this.configService.get<string>('sms.SmsSdkAppid'),
                TemplateId: this.configService.get<string>('sms.TemplateId'), // 若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。
                SignName: this.configService.get<string>('sms.SignName'),
                //   TemplateParamSet: [code, minute], // 根据模版设置
            })
            .then(
                (data) => data.SendStatusSet.find(Boolean), //?
                () => false,
            )
    }

    /**
     * 获取短信套餐包统计信息，用于后台展示
     */

    async getSMSStatics(page = 1, page_size = 10) {
        return await this.sms
            .SmsPackagesStatistics({
                SmsSdkAppId: this.configService.get<string>('sms.SmsSdkAppId'),
                Limit: page_size,
                Offset: (page - 1) * page_size,
                BeginTime: '',
                EndTime: '',
            })
            .then(
                (data) => data.SmsPackagesStatisticsSet,
                () => [],
            )
    }
}
