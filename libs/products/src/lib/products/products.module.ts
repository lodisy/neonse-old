import { PrismaModule } from '@neonse/prisma'
import { Module } from '@nestjs/common'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'

@Module({
    imports: [PrismaModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
