import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true

    @Field(() => Boolean, { nullable: true })
    email?: true

    @Field(() => Boolean, { nullable: true })
    username?: true

    @Field(() => Boolean, { nullable: true })
    password?: true

    @HideField()
    jwtToken?: true

    @HideField()
    resetPasswordToken?: true

    @HideField()
    identifierToken?: true

    @HideField()
    createdAt?: true

    @HideField()
    updatedAt?: true
}
