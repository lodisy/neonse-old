import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ReviewCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number

    @Field(() => Int, { nullable: false })
    profileId!: number

    @Field(() => Int, { nullable: false })
    productId!: number

    @Field(() => Int, { nullable: false })
    rate!: number

    @Field(() => Int, { nullable: false })
    description!: number

    @Field(() => Int, { nullable: false })
    _all!: number
}
