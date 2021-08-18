import { PrismaService } from '@neonse/nest-common-prisma'
import { UsersService } from '@neonse/nest-admin-users'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly usersService: UsersService,
        private prisma: PrismaService,
        readonly configService: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('JWT_ACCESS_SECRET'),
        })
    }
    async validate(payload: { email: string }) {
        return await this.prisma.user.findUnique({
            where: payload,
        })
    }
}
