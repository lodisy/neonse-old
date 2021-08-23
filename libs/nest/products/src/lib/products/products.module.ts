import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { ProductsResolver } from './products.resolver'
import { ProductsService } from './products.service'

@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [ProductsService, ProductsResolver],
    exports: [ProductsService],
})
export class ProductsModule {}
