import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class GuestCountAggregate {
    @Field(() => Int, { nullable: false })
    identifierToken!: number

    @Field(() => Int, { nullable: false })
    email!: number

    @Field(() => Int, { nullable: false })
    _all!: number
}
