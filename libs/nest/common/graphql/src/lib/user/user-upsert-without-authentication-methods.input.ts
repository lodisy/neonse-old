import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAuthenticationMethodsInput } from './user-update-without-authentication-methods.input';
import { UserCreateWithoutAuthenticationMethodsInput } from './user-create-without-authentication-methods.input';

@InputType()
export class UserUpsertWithoutAuthenticationMethodsInput {

    @Field(() => UserUpdateWithoutAuthenticationMethodsInput, {nullable:false})
    update!: UserUpdateWithoutAuthenticationMethodsInput;

    @Field(() => UserCreateWithoutAuthenticationMethodsInput, {nullable:false})
    create!: UserCreateWithoutAuthenticationMethodsInput;
}
