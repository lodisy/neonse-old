import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { Int } from '@nestjs/graphql'

@InputType()
export class ProfileCreateManyInput {
    @HideField()
    id?: string

    @Field(() => String, { nullable: false })
    userId!: string

    @Field(() => String, { nullable: false })
    @Validator.MinLength(2)
    name!: string

    @Field(() => String, { nullable: true })
    phone?: bigint | number

    @Field(() => Int, { nullable: true })
    point?: number

    @Field(() => Int, { nullable: true })
    level?: number
}
