import { SecurityConfig } from '@neonse/configs'
import { PasswordService } from '@neonse/password'
import { PrismaModule } from '@neonse/prisma'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthService } from './auth.service'
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
    ],
    controllers: [],
    providers: [AuthService, PasswordService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
