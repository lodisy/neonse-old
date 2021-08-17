import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'

@InputType()
export class ProductVariantSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    price?: true

    @Field(() => Boolean, { nullable: true })
    sale?: true

    @Field(() => Boolean, { nullable: true })
    stock?: true

    @Field(() => Boolean, { nullable: true })
    sold?: true
}
