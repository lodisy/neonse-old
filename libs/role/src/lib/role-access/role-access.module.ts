import { Module } from '@nestjs/common'
import { RoleAccessController } from './role-access.controller'

@Module({
    controllers: [RoleAccessController],
})
export class RoleAccessModule {}
