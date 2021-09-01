import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUserInput } from './permission-create-without-user.input';
import { PermissionCreateOrConnectWithoutUserInput } from './permission-create-or-connect-without-user.input';
import { PermissionUpsertWithWhereUniqueWithoutUserInput } from './permission-upsert-with-where-unique-without-user.input';
import { PermissionCreateManyUserInputEnvelope } from './permission-create-many-user-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutUserInput } from './permission-update-with-where-unique-without-user.input';
import { PermissionUpdateManyWithWhereWithoutUserInput } from './permission-update-many-with-where-without-user.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUncheckedUpdateManyWithoutUserInput {

    @Field(() => [PermissionCreateWithoutUserInput], {nullable:true})
    create?: Array<PermissionCreateWithoutUserInput>;

    @Field(() => [PermissionCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutUserInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PermissionCreateManyUserInputEnvelope, {nullable:true})
    createMany?: PermissionCreateManyUserInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    connect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    set?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    delete?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<PermissionUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PermissionScalarWhereInput>;
}
