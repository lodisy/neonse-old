import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TencentSmsModule } from 'nestjs-tencent-sms'
import { SMSService } from './sms.service'

@Module({
    imports: [
        TencentSmsModule.forRootAsync({
            useFactory: (configService: ConfigService) => configService.get('sms'),
            inject: [ConfigService],
        }),
    ],
    controllers: [],
    providers: [SMSService],
    exports: [SMSService],
})
export class NestCommonSmsModule {}
