import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { PermissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { PermissionUpsertWithWhereUniqueWithoutRoleInput } from './permission-upsert-with-where-unique-without-role.input';
import { PermissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithWhereUniqueWithoutRoleInput } from './permission-update-with-where-unique-without-role.input';
import { PermissionUpdateManyWithWhereWithoutRoleInput } from './permission-update-many-with-where-without-role.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';

@InputType()
export class PermissionUpdateManyWithoutRoleInput {

    @Field(() => [PermissionCreateWithoutRoleInput], {nullable:true})
    create?: Array<PermissionCreateWithoutRoleInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => [PermissionUpsertWithWhereUniqueWithoutRoleInput], {nullable:true})
    upsert?: Array<PermissionUpsertWithWhereUniqueWithoutRoleInput>;

    @Field(() => PermissionCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: PermissionCreateManyRoleInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    connect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    set?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    disconnect?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    delete?: Array<PermissionWhereUniqueInput>;

    @Field(() => [PermissionUpdateWithWhereUniqueWithoutRoleInput], {nullable:true})
    update?: Array<PermissionUpdateWithWhereUniqueWithoutRoleInput>;

    @Field(() => [PermissionUpdateManyWithWhereWithoutRoleInput], {nullable:true})
    updateMany?: Array<PermissionUpdateManyWithWhereWithoutRoleInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    deleteMany?: Array<PermissionScalarWhereInput>;
}
