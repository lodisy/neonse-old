import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { AuthenticationMethodCreateWithoutUserInput } from './authentication-method-create-without-user.input';

@InputType()
export class AuthenticationMethodCreateOrConnectWithoutUserInput {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;

    @Field(() => AuthenticationMethodCreateWithoutUserInput, {nullable:false})
    create!: AuthenticationMethodCreateWithoutUserInput;
}
