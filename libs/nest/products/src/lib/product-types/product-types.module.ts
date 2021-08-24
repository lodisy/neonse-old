import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { ProductTypesResolver } from './product-types.resolver'
import { ProductTypesService } from './product-types.service'
@Module({
    imports: [PrismaModule],
    providers: [ProductTypesService, ProductTypesResolver],
    exports: [ProductTypesService],
})
export class ProductTypesModule {}
