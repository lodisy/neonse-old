import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthenticationMethodsInput } from './user-create-without-authentication-methods.input';
import { UserCreateOrConnectWithoutAuthenticationMethodsInput } from './user-create-or-connect-without-authentication-methods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAuthenticationMethodsInput {

    @Field(() => UserCreateWithoutAuthenticationMethodsInput, {nullable:true})
    create?: UserCreateWithoutAuthenticationMethodsInput;

    @Field(() => UserCreateOrConnectWithoutAuthenticationMethodsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticationMethodsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
