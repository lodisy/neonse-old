import { AuthModule } from '@neonse/nest-common-auth'
import configs, { GraphqlConfig } from '@neonse/nest-common-configs'
import { FilesModule } from '@neonse/nest-common-files'
import { PrismaModule } from '@neonse/nest-common-prisma'
import { SMSModule } from '@neonse/nest-common-sms'
import { ProductCategoriesModule, ProductsModule, ProductTypesModule } from '@neonse/nest-products'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

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
                    playground: false,
                    plugins: [ApolloServerPluginLandingPageLocalDefault()],
                    context: ({ req }) => ({ req }),
                }
            },
            inject: [ConfigService],
        }),
        AuthModule,
        FilesModule,
        PrismaModule,
        ProductsModule,
        ProductTypesModule,
        ProductCategoriesModule,
        //   PermissionsModule,
        SMSModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
