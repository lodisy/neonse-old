import { FindManyPermissionArgs, Permission, PermissionCreateInput } from '@neonse/nest-common-graphql'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { PermissionsService } from './permissions.service'

@Resolver(() => Permission)
export class PermissionsResolver {
    constructor(private permissionsService: PermissionsService) {}

    @Query(() => [Permission], {
        description: '查询多个权限',
    })
    async permissions(@Args() query: FindManyPermissionArgs): Promise<Permission[]> {
        return this.permissionsService.readPermissions(query)
    }

    @Mutation(() => Permission, {
        description: '创建权限',
    })
    async createPermission(
        @Args('data', { type: () => PermissionCreateInput }) data: PermissionCreateInput,
    ): Promise<Permission> {
        return this.permissionsService.createPermission(data)
    }
}
