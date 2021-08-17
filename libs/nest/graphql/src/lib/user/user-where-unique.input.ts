import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { HideField } from '@nestjs/graphql'

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    @Validator.IsEmail()
    email?: string

    @Field(() => String, { nullable: true })
    username?: string

    @HideField()
    jwtToken?: string

    @HideField()
    resetPasswordToken?: string

    @HideField()
    identifierToken?: string
}
