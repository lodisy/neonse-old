import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';

@InputType()
export class RoleUpsertWithoutPermissionsInput {

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:false})
    update!: RoleUpdateWithoutPermissionsInput;

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:false})
    create!: RoleCreateWithoutPermissionsInput;
}
