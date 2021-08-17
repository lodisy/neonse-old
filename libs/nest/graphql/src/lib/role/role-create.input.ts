import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { RoleStatus } from '../prisma/role-status.enum'
import { HideField } from '@nestjs/graphql'
import { UserCreateNestedManyWithoutRolesInput } from '../user/user-create-nested-many-without-roles.input'

@InputType()
export class RoleCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    @Validator.MaxLength(10)
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => String, { nullable: true })
    @Validator.MaxLength(50)
    description?: string

    @HideField()
    status?: keyof typeof RoleStatus

    @Field(() => Boolean, { nullable: true })
    isDefault?: boolean

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string

    @Field(() => UserCreateNestedManyWithoutRolesInput, { nullable: true })
    users?: UserCreateNestedManyWithoutRolesInput
}
