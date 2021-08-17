import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class CardAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    number?: true
}
