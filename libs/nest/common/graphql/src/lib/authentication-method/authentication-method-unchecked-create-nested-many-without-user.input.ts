import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodCreateWithoutUserInput } from './authentication-method-create-without-user.input';
import { AuthenticationMethodCreateOrConnectWithoutUserInput } from './authentication-method-create-or-connect-without-user.input';
import { AuthenticationMethodCreateManyUserInputEnvelope } from './authentication-method-create-many-user-input-envelope.input';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';

@InputType()
export class AuthenticationMethodUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [AuthenticationMethodCreateWithoutUserInput], {nullable:true})
    create?: Array<AuthenticationMethodCreateWithoutUserInput>;

    @Field(() => [AuthenticationMethodCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AuthenticationMethodCreateOrConnectWithoutUserInput>;

    @Field(() => AuthenticationMethodCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AuthenticationMethodCreateManyUserInputEnvelope;

    @Field(() => [AuthenticationMethodWhereUniqueInput], {nullable:true})
    connect?: Array<AuthenticationMethodWhereUniqueInput>;
}
