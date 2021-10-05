import { AuthModule } from '@neonse/nest-common-auth'
import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsResolver } from './products.resolver'
import { ProductsService } from './products.service'

@Module({
    imports: [AuthModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsResolver],
    exports: [ProductsService],
})
export class ProductsModule {}
