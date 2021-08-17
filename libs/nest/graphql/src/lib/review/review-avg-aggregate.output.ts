import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class ReviewAvgAggregate {
    @Field(() => Float, { nullable: true })
    rate?: number
}
