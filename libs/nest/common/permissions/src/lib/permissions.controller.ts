import { FindManyPermissionArgs, PermissionCreateInput } from '@neonse/nest-common-graphql'
import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { Permission } from '@prisma/client'
import { PermissionsService } from './permissions.service'

@Controller('permissions')
// use guards
export class PermissionsController {
    constructor(private permissionsService: PermissionsService) {}

    @Get()
    async readPermissions(@Query() query: FindManyPermissionArgs): Promise<Permission[]> {
        return await this.permissionsService.readPermissions(query)
    }

    @Post()
    async createPermission(@Body() data: PermissionCreateInput): Promise<Permission> {
        return await this.permissionsService.createPermission(data)
    }
}
