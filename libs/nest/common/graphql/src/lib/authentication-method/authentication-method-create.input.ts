import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationStrategy } from '../prisma/authentication-strategy.enum';
import { UserCreateNestedOneWithoutAuthenticationMethodsInput } from '../user/user-create-nested-one-without-authentication-methods.input';

@InputType()
export class AuthenticationMethodCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthenticationStrategy, {nullable:true})
    strategy?: keyof typeof AuthenticationStrategy;

    @Field(() => UserCreateNestedOneWithoutAuthenticationMethodsInput, {nullable:false})
    User!: UserCreateNestedOneWithoutAuthenticationMethodsInput;
}
