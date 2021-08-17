import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number

    @Field(() => Int, { nullable: false })
    email!: number

    @Field(() => Int, { nullable: false })
    username!: number

    @HideField()
    password!: number

    @HideField()
    jwtToken!: number

    @HideField()
    resetPasswordToken!: number

    @HideField()
    identifierToken!: number

    @Field(() => Int, { nullable: false })
    createdAt!: number

    @Field(() => Int, { nullable: false })
    updatedAt!: number

    @Field(() => Int, { nullable: false })
    _all!: number
}
