import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { RoleCreateOrConnectWithoutPermissionsInput } from './role-create-or-connect-without-permissions.input';
import { RoleUpsertWithoutPermissionsInput } from './role-upsert-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';

@InputType()
export class RoleUpdateOneRequiredWithoutPermissionsInput {

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:true})
    create?: RoleCreateWithoutPermissionsInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput;

    @Field(() => RoleUpsertWithoutPermissionsInput, {nullable:true})
    upsert?: RoleUpsertWithoutPermissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:true})
    update?: RoleUpdateWithoutPermissionsInput;
}
