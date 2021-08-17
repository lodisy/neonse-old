import { PrismaModule } from '@neonse/nest-prisma'
import {
    ProductsController,
    ProductsModule,
    ProductsService,
    ProductTypesController,
    ProductTypesModule,
    ProductTypesService,
} from '@neonse/nest-products'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
    imports: [
        ProductsModule,
        PrismaModule,
        ProductTypesModule,
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
    ],
    controllers: [ProductsController, ProductTypesController],
    providers: [ProductsService, ProductTypesService],
})
export class AppModule {}
