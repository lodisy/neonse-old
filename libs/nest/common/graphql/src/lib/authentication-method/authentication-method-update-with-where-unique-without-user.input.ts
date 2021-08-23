import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { AuthenticationMethodUpdateWithoutUserInput } from './authentication-method-update-without-user.input';

@InputType()
export class AuthenticationMethodUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;

    @Field(() => AuthenticationMethodUpdateWithoutUserInput, {nullable:false})
    data!: AuthenticationMethodUpdateWithoutUserInput;
}
