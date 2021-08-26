import { Module } from '@nestjs/common'
import { COSService } from './cos.service'
@Module({
    controllers: [],
    providers: [COSService],
    exports: [COSService],
})
export class COSModule {}
