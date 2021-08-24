import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { ProductCategoriesResolver } from './product-categories.resolver'
import { ProductCategoriesService } from './product-categories.service'

@Module({
    imports: [PrismaModule],
    providers: [ProductCategoriesService, ProductCategoriesResolver],
    exports: [ProductCategoriesService],
})
export class ProductCategoriesModule {}
