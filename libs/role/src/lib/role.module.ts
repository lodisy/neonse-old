import { Module } from '@nestjs/common'
import { RoleService } from './role.service'

@Module({
    controllers: [],
    providers: [RoleService],
    exports: [],
})
export class RoleModule {}
