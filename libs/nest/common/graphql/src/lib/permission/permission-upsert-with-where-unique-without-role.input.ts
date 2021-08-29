import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutRoleInput } from './permission-update-without-role.input';
import { PermissionCreateWithoutRoleInput } from './permission-create-without-role.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutRoleInput, {nullable:false})
    update!: PermissionUpdateWithoutRoleInput;

    @Field(() => PermissionCreateWithoutRoleInput, {nullable:false})
    create!: PermissionCreateWithoutRoleInput;
}
