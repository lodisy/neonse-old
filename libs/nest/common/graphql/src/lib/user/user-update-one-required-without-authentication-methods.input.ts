import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthenticationMethodsInput } from './user-create-without-authentication-methods.input';
import { UserCreateOrConnectWithoutAuthenticationMethodsInput } from './user-create-or-connect-without-authentication-methods.input';
import { UserUpsertWithoutAuthenticationMethodsInput } from './user-upsert-without-authentication-methods.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAuthenticationMethodsInput } from './user-update-without-authentication-methods.input';

@InputType()
export class UserUpdateOneRequiredWithoutAuthenticationMethodsInput {

    @Field(() => UserCreateWithoutAuthenticationMethodsInput, {nullable:true})
    create?: UserCreateWithoutAuthenticationMethodsInput;

    @Field(() => UserCreateOrConnectWithoutAuthenticationMethodsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutAuthenticationMethodsInput;

    @Field(() => UserUpsertWithoutAuthenticationMethodsInput, {nullable:true})
    upsert?: UserUpsertWithoutAuthenticationMethodsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAuthenticationMethodsInput, {nullable:true})
    update?: UserUpdateWithoutAuthenticationMethodsInput;
}
