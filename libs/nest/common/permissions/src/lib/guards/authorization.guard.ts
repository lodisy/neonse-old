import { parseContext } from '@neonse/nest-common-shared'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GqlExecutionContext } from '@nestjs/graphql'
import { User } from '@prisma/client'
import { AbilityFactory } from '../ability.factory'
import { CHECK_PERMISSIONS_KEY } from '../decorators/check-permissions.decorator'
import { PermissionHandler } from '../permission-handler.interface'
import { PermissionsService } from '../permissions.service'

@Injectable()
export class AuthorizationGuard implements CanActivate {
    constructor(
        private abilityFactory: AbilityFactory,
        private reflector: Reflector,
        private permissionsSerivce: PermissionsService,
    ) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { isGraphQL } = parseContext(context)

        const permissionHandlers =
            this.reflector.get<PermissionHandler[]>(CHECK_PERMISSIONS_KEY, context.getHandler()) || []

        const graphQlContext = GqlExecutionContext.create(context)
        const user = graphQlContext.getContext().user as User
        if (isGraphQL) {
            if (!user) return false
        }

        const permissions = await this.permissionsSerivce.readPermissions({
            where: {
                userId: user.id,
            },
        })

        const ability = this.abilityFactory.createForUser(permissions)

        return permissionHandlers.every((handler) => {
            if (typeof handler === 'function') {
                return handler(ability)
            }
            return handler.handle(ability)
        })
    }
}
