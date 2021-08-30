import { PasswordService } from '@neonse/nest-common-password'
import { UsersModule } from '@neonse/nest-common-users'
import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.registerAsync({
            useFactory: async (configService: ConfigService) => {
                return {
                    secret: configService.get<string>('JWT_ACCESS_SECRET'),
                    signOptions: {
                        expiresIn: configService.get<string>('security.expiresIn'),
                    },
                }
            },
            inject: [ConfigService],
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, PasswordService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
