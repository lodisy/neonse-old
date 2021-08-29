import { PrismaModule } from '@neonse/nest-common-prisma'
import { Module } from '@nestjs/common'
import { AbilityFactory } from './ability.factory'
import { PermissionsResolver } from './permissions.resolver'
import { PermissionsService } from './permissions.service'
@Module({
    imports: [PrismaModule],
    controllers: [],
    providers: [PermissionsService, PermissionsResolver, AbilityFactory],
    exports: [PermissionsService, AbilityFactory],
})
export class PermissionsModule {}
