import { Module } from '@nestjs/common'
import { OrdersResolver } from './orders.resolver'
import { OrdersService } from './orders.service'
@Module({
    controllers: [],
    providers: [OrdersService, OrdersResolver],
    exports: [OrdersService],
})
export class OrdersModule {}
