import { Module } from '@nestjs/common'
import { PromotionsService } from './promotions.service'

@Module({
    controllers: [],
    providers: [PromotionsService],
    exports: [PromotionsService],
})
export class PromotionsModule {}
