import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutUsersInput } from './role-create-without-users.input';
import { RoleCreateOrConnectWithoutUsersInput } from './role-create-or-connect-without-users.input';
import { RoleUpsertWithWhereUniqueWithoutUsersInput } from './role-upsert-with-where-unique-without-users.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutUsersInput } from './role-update-with-where-unique-without-users.input';
import { RoleUpdateManyWithWhereWithoutUsersInput } from './role-update-many-with-where-without-users.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutUsersInput {

    @Field(() => [RoleCreateWithoutUsersInput], {nullable:true})
    create?: Array<RoleCreateWithoutUsersInput>;

    @Field(() => [RoleCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<RoleCreateOrConnectWithoutUsersInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<RoleUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<RoleUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    deleteMany?: Array<RoleScalarWhereInput>;
}
