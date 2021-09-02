/**
 * 验证来自前端的 jwt
 */
import { UsersService } from '@neonse/nest-common-users'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService, private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request?.cookies?.Access
                },
            ]),
            secretOrKey: configService.get<string>('JWT_ACCESS_SECRET'),
            ignoreExpiration: false,
        })
    }
    async validate(payload: { userId: string; iat: number; exp: number }) {
        return this.usersService.findUser(payload.userId)
    }
}
