import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ReviewAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    rate?: true
}
