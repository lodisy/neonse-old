import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';
import { PermissionCreateOrConnectWithoutUserInput } from './permission-create-or-connect-without-user.input';
import { PermissionCreateManyUserInputEnvelope } from './permission-create-many-user-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [PermissionCreateWithoutUserInput], {nullable:true})
    create?: Array<PermissionCreateWithoutUserInput>;

    @Field(() => [PermissionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutUserInput>;

    @Field(() => PermissionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PermissionCreateManyUserInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    connect?: Array<PermissionWhereUniqueInput>;
}
