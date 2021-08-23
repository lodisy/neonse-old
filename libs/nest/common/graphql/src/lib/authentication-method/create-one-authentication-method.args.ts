import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodCreateInput } from './authentication-method-create.input';

@ArgsType()
export class CreateOneAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodCreateInput, {nullable:false})
    data!: AuthenticationMethodCreateInput;
}
