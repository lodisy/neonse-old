import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class PermissionCreateOrConnectWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutRoleInput, {nullable:false})
    create!: PermissionCreateWithoutRoleInput;
}
