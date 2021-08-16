import { PrismaModule } from '@neonse/prisma'
import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsResolver } from './products.resolver'
import { ProductsService } from './products.service'

@Module({
    imports: [PrismaModule],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
