import { SecurityConfig } from '@neonse/nest-common-configs'
import { PasswordService } from '@neonse/nest-common-password'
import { PrismaModule } from '@neonse/nest-common-prisma'
import { UsersModule } from '@neonse/nest-common-users'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { GqlAuthGuard } from './guards/gql-auth.guard'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => {
                const securityConfig = configService.get<SecurityConfig>('security')
                return {
                    secret: configService.get<string>('JWT_ACCESS_SECRET'),
                    signOptions: {
                        expiresIn: securityConfig.expiresIn,
                    },
                }
            },
            inject: [ConfigService],
        }),
        PrismaModule,
        UsersModule,
    ],
    controllers: [],
    providers: [AuthService, PasswordService, JwtStrategy, GqlAuthGuard],
    exports: [AuthService],
})
export class AuthModule {}
