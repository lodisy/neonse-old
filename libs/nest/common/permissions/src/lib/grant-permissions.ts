import { Ability } from '@casl/ability'
import { Action } from '@prisma/client'
import { IPermissionHandler } from './permission-handler.interface'

export class GrantPermission implements IPermissionHandler {
    constructor(
        readonly action: Action,
        readonly subject: string,
        readonly fields: string[],
        readonly inverted: boolean,
    ) {}

    handle(ability: Ability) {
        if (this.inverted) {
            return ability.cannot(this.action, this.subject)
        }
        return ability.can(this.action, this.subject)
    }
}
