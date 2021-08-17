import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import * as Validator from 'class-validator'
import { HideField } from '@nestjs/graphql'
import { ProfileUncheckedCreateNestedOneWithoutUserInput } from '../profile/profile-unchecked-create-nested-one-without-user.input'

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    @Validator.IsEmail()
    email!: string

    @Field(() => String, { nullable: true })
    username?: string

    @Field(() => String, { nullable: false })
    @Validator.MinLength(6)
    @Validator.MaxLength(10)
    password!: string

    @HideField()
    jwtToken!: string

    @HideField()
    resetPasswordToken?: string

    @HideField()
    identifierToken?: string

    @HideField()
    createdAt?: Date | string

    @HideField()
    updatedAt?: Date | string

    @Field(() => ProfileUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
}
