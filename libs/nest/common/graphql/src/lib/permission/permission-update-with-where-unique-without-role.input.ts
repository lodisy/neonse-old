import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutRoleInput } from './permission-update-without-role.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutRoleInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutRoleInput, {nullable:false})
    data!: PermissionUpdateWithoutRoleInput;
}
