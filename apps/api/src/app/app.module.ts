import { PrismaModule } from '@neonse/prisma'
import {
    ProductsController,
    ProductsModule,
    ProductsService,
    ProductTypesController,
    ProductTypesModule,
    ProductTypesService,
} from '@neonse/products'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
    imports: [ProductsModule, PrismaModule, ProductTypesModule],
    controllers: [AppController, ProductsController, ProductTypesController],
    providers: [AppService, ProductsService, ProductTypesService],
})
export class AppModule {}
