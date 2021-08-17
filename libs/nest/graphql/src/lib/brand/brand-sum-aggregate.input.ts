import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class BrandSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    year?: true
}
