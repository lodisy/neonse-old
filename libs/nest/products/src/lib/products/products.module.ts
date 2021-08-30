import { PermissionsModule } from '@neonse/nest-common-permissions'
import { Module } from '@nestjs/common'
import { ProductsResolver } from './products.resolver'
import { ProductsService } from './products.service'

@Module({
    imports: [PermissionsModule],
    controllers: [],
    providers: [ProductsService, ProductsResolver],
    exports: [ProductsService],
})
export class ProductsModule {}
