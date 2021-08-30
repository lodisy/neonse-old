/**
 * 验证来自前端的 jwt
 */
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { AuthService } from '../auth.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService, private configService: ConfigService) {
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
    async validate(email: string, password: string) {
        return await this.authService.validateUser(email, password)
    }
}
