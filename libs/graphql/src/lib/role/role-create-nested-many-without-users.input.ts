import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedManyWithoutUsersInput {

    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    create?: Array<RoleCreateWithoutUsersInput>;

    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;
}
