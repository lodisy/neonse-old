import { AuthModule } from '@neonse/nest-common-auth'
import configs, { GraphqlConfig } from '@neonse/nest-common-configs'
import { FilesModule } from '@neonse/nest-common-files'
import { PrismaModule } from '@neonse/nest-common-prisma'
import { HttpExceptionFilter } from '@neonse/nest-common-shared'
import { ProductCategoriesModule, ProductsModule, ProductTypesModule } from '@neonse/nest-store-products'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_FILTER } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { AcceptLanguageResolver, I18nJsonParser, I18nModule } from 'nestjs-i18n'
import * as path from 'path'

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
                    playground: true,
                    //    plugins: [ApolloServerPluginLandingPageLocalDefault()],
                    context: ({ req, connection }) => (connection ? { req: connection.context } : { req }),
                }
            },
            inject: [ConfigService],
        }),
        I18nModule.forRoot({
            fallbackLanguage: 'en',
            parserOptions: {
                path: path.join(__dirname, '/locales/'),
            },
            parser: I18nJsonParser,
            resolvers: [AcceptLanguageResolver],
        }),
        AuthModule,
        FilesModule,
        PrismaModule,
        ProductsModule,
        ProductTypesModule,
        ProductCategoriesModule,
        //   PermissionsModule,
    ],
    controllers: [],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter, // 全局异常过滤器
        },
    ],
})
export class AppModule {}
