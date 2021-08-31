import { COSModule } from '@neonse/nest-common-cos'
import { FilesModule } from '@neonse/nest-common-files'
import { PasswordModule } from '@neonse/nest-common-password'
import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'

@Module({
    imports: [PasswordModule, FilesModule, COSModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
