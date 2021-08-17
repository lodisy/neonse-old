import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) {}

    @Mutation()
    async signIn(@Args('email') email: string, @Args('password') password: string) {
        const { user } = await this.authService.signIn(email, password)
        return user
    }

    @Mutation()
    async signUp(
        @Args('email') email: string,
        @Args('password') password: string,
        @Args('username', { nullable: true }) username: string,
    ) {
        const { user } = await this.authService.signUp(email, password, username)
        return user
    }
}
