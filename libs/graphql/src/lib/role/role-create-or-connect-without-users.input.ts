import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';

@InputType()
export class RoleCreateOrConnectWithoutUsersInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutUsersInput, {nullable:false})
    create!: RoleCreateWithoutUsersInput;
}
