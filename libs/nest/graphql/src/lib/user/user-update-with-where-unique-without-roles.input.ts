import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { UserWhereUniqueInput } from './user-where-unique.input'
import { UserUpdateWithoutRolesInput } from './user-update-without-roles.input'

@InputType()
export class UserUpdateWithWhereUniqueWithoutRolesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput

    @Field(() => UserUpdateWithoutRolesInput, { nullable: false })
    data!: UserUpdateWithoutRolesInput
}
