import { SMSConfig } from '@neonse/nest-common-configs'
import { UsersService } from '@neonse/nest-common-users'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as _ from 'lodash'
import { sms } from 'tencentcloud-sdk-nodejs'

@Injectable()
export class SMSService {
    private sms = new sms.v20210111.Client({
        ...this.configService.get<SMSConfig>('sms'),
    })
    private list = {}
    constructor(private configService: ConfigService, private usersService: UsersService) {}

    /**
     * 发送短信
     * @param mobile 手机号
     */

    async sendSMS(mobile: string) {
        const code = '' + _.random(9) + _.random(9) + _.random(9) + _.random(9)

        return await this.sms
            .SendSms({
                PhoneNumberSet: [mobile], // 前端录入手机号时连带国家代码 +8613333xxx
                SmsSdkAppId: this.configService.get<string>('sms.SmsSdkAppid'),
                TemplateId: this.configService.get<string>('sms.TemplateId'), // 若向境外手机号发送短信，仅支持使用国际/港澳台短信模板。
                SignName: this.configService.get<string>('sms.SignName'),
                TemplateParamSet: [code, '1'], // 根据模版设置
            })
            .then(
                (value) => {
                    value.SendStatusSet.forEach((result) => {
                        if (result.Code === 'Ok') {
                            if (this.list[mobile]) {
                                this.list[mobile].push(code)
                            } else {
                                this.list[mobile] = [code]
                            }

                            // 1 分钟后删除验证码
                            setTimeout(() => {
                                _.pull(this.list[mobile], code)
                                if (this.list[mobile] && this.list[mobile].length == 0) {
                                    delete this.list[mobile]
                                }
                            }, 60 * 1000)
                        }
                    })
                    return value
                },
                () => [],
            )
    }

    /**
     * 核对验证码 更新用户状态
     * @param mobile 手机号
     * @param code 待验证短信验证码
     */

    async confirmMobileNumber(mobile: string, code: string) {
        if (this.list[mobile].indexOf(code) > -1) {
            await this.usersService.updateUser(
                { mobile },
                {
                    isMobileConfirmed: true,
                },
            )
        } else if (this.list[mobile].length === 0) {
            throw new HttpException('短信验证码已过期', HttpStatus.INTERNAL_SERVER_ERROR)
        } else throw new HttpException('短信验证码错误', HttpStatus.UNAUTHORIZED)
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
