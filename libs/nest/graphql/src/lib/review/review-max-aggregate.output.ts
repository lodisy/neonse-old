import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ReviewMaxAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    profileId?: string

    @Field(() => String, { nullable: true })
    productId?: string

    @Field(() => Int, { nullable: true })
    rate?: number

    @Field(() => String, { nullable: true })
    description?: string
}
