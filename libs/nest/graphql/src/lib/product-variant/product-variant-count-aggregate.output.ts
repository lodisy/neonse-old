import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ProductVariantCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number

    @Field(() => Int, { nullable: false })
    productId!: number

    @Field(() => Int, { nullable: false })
    name!: number

    @Field(() => Int, { nullable: false })
    sku!: number

    @Field(() => Int, { nullable: false })
    images!: number

    @Field(() => Int, { nullable: false })
    brands!: number

    @Field(() => Int, { nullable: false })
    style!: number

    @Field(() => Int, { nullable: false })
    size!: number

    @Field(() => Int, { nullable: false })
    price!: number

    @Field(() => Int, { nullable: false })
    sale!: number

    @Field(() => Int, { nullable: false })
    stock!: number

    @Field(() => Int, { nullable: false })
    sold!: number

    @Field(() => Int, { nullable: false })
    _all!: number
}
