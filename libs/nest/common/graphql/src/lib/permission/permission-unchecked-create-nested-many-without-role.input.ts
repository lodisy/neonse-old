import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';
import { PermissionCreateOrConnectWithoutRoleInput } from './permission-create-or-connect-without-role.input';
import { PermissionCreateManyRoleInputEnvelope } from './permission-create-many-role-input-envelope.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutRoleInput {

    @Field(() => [PermissionCreateWithoutRoleInput], {nullable:true})
    create?: Array<PermissionCreateWithoutRoleInput>;

    @Field(() => [PermissionCreateOrConnectWithoutRoleInput], {nullable:true})
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutRoleInput>;

    @Field(() => PermissionCreateManyRoleInputEnvelope, {nullable:true})
    createMany?: PermissionCreateManyRoleInputEnvelope;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    connect?: Array<PermissionWhereUniqueInput>;
}
