import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { ProductTypesService } from './product-types.service'

@Module({
    imports: [PrismaModule],
    providers: [ProductTypesService],
    exports: [ProductTypesService],
})
export class ProductTypesModule {}
