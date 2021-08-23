import { PasswordModule } from '@neonse/nest-common-password'
import { Module } from '@nestjs/common'
import { UsersService } from './users.service'

@Module({
    imports: [PasswordModule],
    //controllers: [],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
