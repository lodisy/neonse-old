import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { AuthenticationMethodCreateInput } from './authentication-method-create.input';
import { AuthenticationMethodUpdateInput } from './authentication-method-update.input';

@ArgsType()
export class UpsertOneAuthenticationMethodArgs {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;

    @Field(() => AuthenticationMethodCreateInput, {nullable:false})
    create!: AuthenticationMethodCreateInput;

    @Field(() => AuthenticationMethodUpdateInput, {nullable:false})
    update!: AuthenticationMethodUpdateInput;
}
