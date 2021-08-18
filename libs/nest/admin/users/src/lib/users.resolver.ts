import { GqlAuthGuard } from '@neonse/nest-server-auth'
import { UseGuards } from '@nestjs/common'
import { Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'

@Resolver()
@UseGuards(GqlAuthGuard)
export class UsersResolver {
    constructor(private usersService: UsersService) {}
}
