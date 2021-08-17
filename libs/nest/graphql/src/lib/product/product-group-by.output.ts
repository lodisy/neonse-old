import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ProductCountAggregate } from './product-count-aggregate.output'
import { ProductAvgAggregate } from './product-avg-aggregate.output'
import { ProductSumAggregate } from './product-sum-aggregate.output'
import { ProductMinAggregate } from './product-min-aggregate.output'
import { ProductMaxAggregate } from './product-max-aggregate.output'

@ObjectType()
export class ProductGroupBy {
    @Field(() => String, { nullable: false })
    id!: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    sku!: string

    @Field(() => [String], { nullable: true })
    images?: Array<string>

    @Field(() => String, { nullable: false })
    discription!: string

    @Field(() => Int, { nullable: false })
    price!: number

    @Field(() => Boolean, { nullable: true })
    featured?: boolean

    @Field(() => Boolean, { nullable: true })
    draft?: boolean

    @Field(() => Int, { nullable: false })
    stock!: number

    @Field(() => Int, { nullable: true })
    sold?: number

    @Field(() => Date, { nullable: false })
    createdAt!: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string

    @Field(() => ProductCountAggregate, { nullable: true })
    _count?: ProductCountAggregate

    @Field(() => ProductAvgAggregate, { nullable: true })
    _avg?: ProductAvgAggregate

    @Field(() => ProductSumAggregate, { nullable: true })
    _sum?: ProductSumAggregate

    @Field(() => ProductMinAggregate, { nullable: true })
    _min?: ProductMinAggregate

    @Field(() => ProductMaxAggregate, { nullable: true })
    _max?: ProductMaxAggregate
}
