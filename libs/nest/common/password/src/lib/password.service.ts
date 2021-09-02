import type { SecurityConfig } from '@neonse/nest-common-configs'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { compare, hash } from 'bcrypt'

@Injectable()
export class PasswordService {
    constructor(private configService: ConfigService) {}

    get bcryptSaltRounds(): string | number {
        const securityConfig = this.configService.get<SecurityConfig>('security')
        const saltOrRounds = securityConfig.bcryptSaltOrRound
        return Number.isInteger(Number(saltOrRounds)) ? Number(saltOrRounds) : saltOrRounds
    }

    /**
     * 比对明文密码和加密密码是否一致
     * 返回 true 或 false
     */

    async validatePassword(password: string, hashedPassword: string): Promise<boolean> {
        return compare(password, hashedPassword)
    }

    /** 给密码加密 */

    async hashPassword(password: string): Promise<string> {
        return hash(password, this.bcryptSaltRounds)
    }
}
