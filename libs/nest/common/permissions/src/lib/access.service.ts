/**
 * TODO 需要验证
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Action, Prisma, User } from '@prisma/client'
import { AbilityFactory } from './ability.factory'

@Injectable()
export class AccessService {
    constructor(private abilityFactory: AbilityFactory) {}

    // 只从 action 和 subject 层面检测
    async isAccessible(user: User, action: Action, subject: Prisma.ModelName): Promise<boolean> {
        if (!user) return false // No user - no access
        if (!action || !subject) return false // User exists but no ability metadata - deny access

        const abilities = await this.abilityFactory.createAbility(subject, user)

        // if(user.roles.includes(Admin)) return true

        return abilities.can(action, subject)
    }

    // TODO 从 field 和 conditions 层面继续检测
    async canAccess(user: User, action: Action, subject: Prisma.ModelName): Promise<void> {
        const isAccessible = await this.isAccessible(user, action, subject)

        if (!isAccessible) {
            const abilities = await this.abilityFactory.createAbility(subject, user)
            const rules = abilities.rulesFor(action, subject)
            // TODO why 如果 rules 中至少有一条含有 conditions
            if (rules.some((rule) => rule.conditions)) throw new HttpException('', HttpStatus.NOT_FOUND)

            throw new HttpException('', HttpStatus.UNAUTHORIZED)
            // 403 when no conditions
            // 404 when conditions set
        }
    }

    async canActivateAbility(request, ability): Promise<boolean> {
        // 从 request 中获得 meta 数据，用上述方法判断

        const { user } = request

        if (!ability) return false // User exists but no ability metadata - deny access

        const { action, subject } = ability

        const abilities = await this.abilityFactory.createAbility(subject, user)
        const rules = abilities.rulesFor(action, subject)

        const fields = rules.filter((rule) => rule.fields).map((rule) => rule.fields)
        const conditions = rules.filter((rule) => rule.conditions).map((rule) => rule.conditions)

        return abilities.can(action, subject) // ? 为什么 can 只接受三个参数
    }
}
