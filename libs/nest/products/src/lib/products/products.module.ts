import { AuthModule } from '@neonse/nest-common-auth'
import { Module } from '@nestjs/common'
import { ProductsResolver } from './products.resolver'
import { ProductsService } from './products.service'
@Module({
    imports: [AuthModule],
    controllers: [],
    providers: [ProductsService, ProductsResolver],
    exports: [ProductsService],
})
export class ProductsModule {}
