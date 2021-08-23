import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationMethodCreateWithoutUserInput } from './authentication-method-create-without-user.input';
import { AuthenticationMethodCreateOrConnectWithoutUserInput } from './authentication-method-create-or-connect-without-user.input';
import { AuthenticationMethodUpsertWithWhereUniqueWithoutUserInput } from './authentication-method-upsert-with-where-unique-without-user.input';
import { AuthenticationMethodCreateManyUserInputEnvelope } from './authentication-method-create-many-user-input-envelope.input';
import { AuthenticationMethodWhereUniqueInput } from './authentication-method-where-unique.input';
import { AuthenticationMethodUpdateWithWhereUniqueWithoutUserInput } from './authentication-method-update-with-where-unique-without-user.input';
import { AuthenticationMethodUpdateManyWithWhereWithoutUserInput } from './authentication-method-update-many-with-where-without-user.input';
import { AuthenticationMethodScalarWhereInput } from './authentication-method-scalar-where.input';

@InputType()
export class AuthenticationMethodUpdateManyWithoutUserInput {

    @Field(() => [AuthenticationMethodCreateWithoutUserInput], {nullable:true})
    create?: Array<AuthenticationMethodCreateWithoutUserInput>;

    @Field(() => [AuthenticationMethodCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<AuthenticationMethodCreateOrConnectWithoutUserInput>;

    @Field(() => [AuthenticationMethodUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<AuthenticationMethodUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AuthenticationMethodCreateManyUserInputEnvelope, {nullable:true})
    createMany?: AuthenticationMethodCreateManyUserInputEnvelope;

    @Field(() => [AuthenticationMethodWhereUniqueInput], {nullable:true})
    connect?: Array<AuthenticationMethodWhereUniqueInput>;

    @Field(() => [AuthenticationMethodWhereUniqueInput], {nullable:true})
    set?: Array<AuthenticationMethodWhereUniqueInput>;

    @Field(() => [AuthenticationMethodWhereUniqueInput], {nullable:true})
    disconnect?: Array<AuthenticationMethodWhereUniqueInput>;

    @Field(() => [AuthenticationMethodWhereUniqueInput], {nullable:true})
    delete?: Array<AuthenticationMethodWhereUniqueInput>;

    @Field(() => [AuthenticationMethodUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<AuthenticationMethodUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AuthenticationMethodUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<AuthenticationMethodUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AuthenticationMethodScalarWhereInput], {nullable:true})
    deleteMany?: Array<AuthenticationMethodScalarWhereInput>;
}
