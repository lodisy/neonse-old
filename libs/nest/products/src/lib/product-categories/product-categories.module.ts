import { Module } from '@nestjs/common'
import { ProductCategoriesResolver } from './product-categories.resolver'
import { ProductCategoriesService } from './product-categories.service'

@Module({
    imports: [],
    providers: [ProductCategoriesService, ProductCategoriesResolver],
    exports: [ProductCategoriesService],
})
export class ProductCategoriesModule {}
