import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ReviewSumAggregate {
    @Field(() => Int, { nullable: true })
    rate?: number
}
