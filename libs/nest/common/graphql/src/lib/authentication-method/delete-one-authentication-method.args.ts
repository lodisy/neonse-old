import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';

@ArgsType()
export class DeleteOneAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;
}
