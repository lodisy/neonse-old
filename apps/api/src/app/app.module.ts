import configs, { GraphqlConfig } from '@neonse/nest-common-configs'
import { FilesModule } from '@neonse/nest-common-files'
import { PermissionsModule } from '@neonse/nest-common-permissions'
import { SMSModule } from '@neonse/nest-common-sms'
import { ProductCategoriesModule, ProductsModule, ProductTypesModule } from '@neonse/nest-products'
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
                    //  plugins: [],
                    context: ({ req }) => ({ req }),
                }
            },
            inject: [ConfigService],
        }),

        FilesModule,
        ProductsModule,
        ProductTypesModule,
        ProductCategoriesModule,
        PermissionsModule,
        SMSModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
