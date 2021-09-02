import { UsersService } from '@neonse/nest-common-users'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refreshtoken') {
    constructor(configService: ConfigService, private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.Refresh
                },
            ]),
            secretOrKey: configService.get<string>('JWT_REFRESH_SECRET'),
            passReqToCallback: true,
        })
    }

    async validate(request: Request, payload: { userId: string }) {
        const refreshToken = request.cookies?.Refresh as string
        return this.usersService.findUserByRefreshToken(refreshToken, payload.userId)
    }
}
