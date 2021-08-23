import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodUpdateInput } from './authentication-method-update.input';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';

@ArgsType()
export class UpdateOneAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodUpdateInput, {nullable:false})
    data!: AuthenticationMethodUpdateInput;

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;
}
