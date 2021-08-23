import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { AuthenticationMethodUpdateWithoutUserInput } from './authentication-method-update-without-user.input';
import { AuthenticationMethodCreateWithoutUserInput } from './authentication-method-create-without-user.input';

@InputType()
export class AuthenticationMethodUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AuthenticationMethodWhereUniqueInput, {nullable:false})
    where!: AuthenticationMethodWhereUniqueInput;

    @Field(() => AuthenticationMethodUpdateWithoutUserInput, {nullable:false})
    update!: AuthenticationMethodUpdateWithoutUserInput;

    @Field(() => AuthenticationMethodCreateWithoutUserInput, {nullable:false})
    create!: AuthenticationMethodCreateWithoutUserInput;
}
