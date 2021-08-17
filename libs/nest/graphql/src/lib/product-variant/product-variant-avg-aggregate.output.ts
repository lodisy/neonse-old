import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Float } from '@nestjs/graphql'

@ObjectType()
export class ProductVariantAvgAggregate {
    @Field(() => Float, { nullable: true })
    price?: number

    @Field(() => Float, { nullable: true })
    sale?: number

    @Field(() => Float, { nullable: true })
    stock?: number

    @Field(() => Float, { nullable: true })
    sold?: number
}
