import configs, { GraphqlConfig } from '@neonse/nest-common-configs'
import { ProductsModule, ProductTypesModule } from '@neonse/nest-products'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, load: [configs] }),
        GraphQLModule.forRootAsync({
            useFactory: async (configService: ConfigService) => {
                const graphqlConfig = configService.get<GraphqlConfig>('graphql')
                return {
                    installSubscriptionHandlers: true,
                    buildSchemaOptions: {
                        numberScalarMode: 'integer',
                    },
                    sortSchema: graphqlConfig.sortSchema,
                    autoSchemaFile: graphqlConfig.schemaDestination || './schema.graphql',
                    debug: graphqlConfig.debug,
                    playground: graphqlConfig.playgroundEnabled,
                    context: ({ req }) => ({ req }),
                }
            },
            inject: [ConfigService],
        }),
        ProductsModule,
        ProductTypesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
