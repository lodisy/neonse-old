import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserCreateWithoutRolesInput } from './user-create-without-roles.input'
import { UserCreateOrConnectWithoutRolesInput } from './user-create-or-connect-without-roles.input'
import { UserWhereUniqueInput } from './user-where-unique.input'

@InputType()
export class UserCreateNestedManyWithoutRolesInput {
    @Field(() => [UserCreateWithoutRolesInput], { nullable: true })
    create?: Array<UserCreateWithoutRolesInput>

    @Field(() => [UserCreateOrConnectWithoutRolesInput], { nullable: true })
    connectOrCreate?: Array<UserCreateOrConnectWithoutRolesInput>

    @Field(() => [UserWhereUniqueInput], { nullable: true })
    connect?: Array<UserWhereUniqueInput>
}
