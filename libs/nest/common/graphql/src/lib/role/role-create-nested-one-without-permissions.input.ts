import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { RoleCreateOrConnectWithoutPermissionsInput } from './role-create-or-connect-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutPermissionsInput {

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:true})
    create?: RoleCreateWithoutPermissionsInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionsInput, {nullable:true})
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    connect?: RoleWhereUniqueInput;
}
