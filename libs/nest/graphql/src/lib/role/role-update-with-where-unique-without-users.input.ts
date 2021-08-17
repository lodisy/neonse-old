import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { RoleWhereUniqueInput } from './role-where-unique.input'
import { RoleUpdateWithoutUsersInput } from './role-update-without-users.input'

@InputType()
export class RoleUpdateWithWhereUniqueWithoutUsersInput {
    @Field(() => RoleWhereUniqueInput, { nullable: false })
    where!: RoleWhereUniqueInput

    @Field(() => RoleUpdateWithoutUsersInput, { nullable: false })
    data!: RoleUpdateWithoutUsersInput
}
