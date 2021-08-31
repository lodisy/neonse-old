import { Module } from '@nestjs/common'
import { ProductTypesResolver } from './product-types.resolver'
import { ProductTypesService } from './product-types.service'
@Module({
    imports: [],
    providers: [ProductTypesService, ProductTypesResolver],
    exports: [ProductTypesService],
})
export class ProductTypesModule {}
