import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BrandAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    year?: true
}
