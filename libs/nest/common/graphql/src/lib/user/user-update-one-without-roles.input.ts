import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input';
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input';
import { UserUpsertWithoutRolesInput } from './user-upsert-without-roles.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input';

@InputType()
export class UserUpdateOneWithoutRolesInput {

    @Field(() => UserCreateWithoutRolesInput, {nullable:true})
    create?: UserCreateWithoutRolesInput;

    @Field(() => UserCreateOrConnectWithoutRolesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput;

    @Field(() => UserUpsertWithoutRolesInput, {nullable:true})
    upsert?: UserUpsertWithoutRolesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserUpdateWithoutRolesInput, {nullable:true})
    update?: UserUpdateWithoutRolesInput;
}
