import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'

@Module({
    controllers: [],
    providers: [RolesService],
    exports: [RolesService],
})
export class RoleModule {}
