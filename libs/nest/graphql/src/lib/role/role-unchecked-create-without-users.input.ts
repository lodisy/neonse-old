import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { RoleStatus } from '../prisma/role-status.enum'
import { HideField } from '@nestjs/graphql'

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {
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
}
