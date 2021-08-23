import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';

@ArgsType()
export class FindUniqueAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;
}
