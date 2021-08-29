import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';

@InputType()
export class RoleCreateOrConnectWithoutPermissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:false})
    create!: RoleCreateWithoutPermissionsInput;
}
