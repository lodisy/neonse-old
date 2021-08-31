import { WechatConfig } from '@neonse/nest-common-configs'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as fs from 'fs'
import * as path from 'path'
import * as Wechat from 'wechat-jssdk'

@Injectable()
export class WechatService {
    private wechat
    constructor(private configService: ConfigService) {
        const wechatConfig = this.configService.get<WechatConfig>('wechat')
        this.wechat = new Wechat({
            ...wechatConfig,
            paymentCertificatePfx: fs.readFileSync(path.join(process.cwd(), 'cert/apiclient_cert.p12')),
        })
    }
}
