import { Module } from '@nestjs/common'
import { ShippingService } from './shipping.service'

@Module({
    controllers: [],
    providers: [ShippingService],
    exports: [ShippingService],
})
export class ShippingModule {}
