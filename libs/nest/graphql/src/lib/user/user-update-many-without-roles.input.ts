import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input'
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input'
import { UserUpsertWithWhereUniqueWithoutRolesInput } from './user-upsert-with-where-unique-without-roles.input'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { UserUpdateWithWhereUniqueWithoutRolesInput } from './user-update-with-where-unique-without-roles.input'
import { UserUpdateManyWithWhereWithoutRolesInput } from './user-update-many-with-where-without-roles.input'
import { UserScalarWhereInput } from './user-scalar-where.input'

@InputType()
export class UserUpdateManyWithoutRolesInput {
    @Field(() => [UserCreateWithoutRolesInput], { nullable: true })
    create?: Array<UserCreateWithoutRolesInput>

    @Field(() => [UserCreateOrConnectWithoutRolesInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutRolesInput>

    @Field(() => [UserUpsertWithWhereUniqueWithoutRolesInput], { nullable: true })
    upsert?: Array<UserUpsertWithWhereUniqueWithoutRolesInput>

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    set?: Array<UserWhereUniqueInput>

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    disconnect?: Array<UserWhereUniqueInput>

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    delete?: Array<UserWhereUniqueInput>

    @Field(() => [UserUpdateWithWhereUniqueWithoutRolesInput], { nullable: true })
    update?: Array<UserUpdateWithWhereUniqueWithoutRolesInput>

    @Field(() => [UserUpdateManyWithWhereWithoutRolesInput], { nullable: true })
    updateMany?: Array<UserUpdateManyWithWhereWithoutRolesInput>

    @Field(() => [UserScalarWhereInput], { nullable: true })
    deleteMany?: Array<UserScalarWhereInput>
}
