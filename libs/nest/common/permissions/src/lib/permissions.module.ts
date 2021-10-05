import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { AbilityFactory } from './ability.factory'
import { PermissionsController } from './permissions.controller'
import { PermissionsService } from './permissions.service'
@Module({
    imports: [PrismaModule],
    controllers: [PermissionsController],
    providers: [PermissionsService, AbilityFactory],
    exports: [PermissionsService, AbilityFactory],
})
export class PermissionsModule {}
