/**
 * 统一的 authguard
 */

import { parseContext } from '@neonse/nest-common-shared'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { GraphQLResolveInfo } from 'graphql'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private reflector: Reflector, // to access setmeta value
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const { req, res, isGraphQL, info } = parseContext(context)
        const isFieldResolver = this.isFieldResolver(info)

        // const permissions = this.reflector.get<Permission[]>('permissions', context.getHandler());
        // if (isFieldResolver && !permissions) {
        //     return true;
        // }
    }

    /**
     * Returns true is this guard is being called on a FieldResolver, i.e. not a top-level
     * Query or Mutation resolver.
     */
    private isFieldResolver(info?: GraphQLResolveInfo): boolean {
        if (!info) {
            return false
        }
        const parentType = info?.parentType?.name
        return parentType !== 'Query' && parentType !== 'Mutation'
    }
}
