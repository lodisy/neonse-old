import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAuthenticationMethodsInput } from './user-create-without-authentication-methods.input';

@InputType()
export class UserCreateOrConnectWithoutAuthenticationMethodsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAuthenticationMethodsInput, {nullable:false})
    create!: UserCreateWithoutAuthenticationMethodsInput;
}
