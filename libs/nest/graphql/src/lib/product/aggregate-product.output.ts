import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ProductCountAggregate } from './product-count-aggregate.output'
import { ProductAvgAggregate } from './product-avg-aggregate.output'
import { ProductSumAggregate } from './product-sum-aggregate.output'
import { ProductMinAggregate } from './product-min-aggregate.output'
import { ProductMaxAggregate } from './product-max-aggregate.output'

@ObjectType()
export class AggregateProduct {
    @Field(() => ProductCountAggregate, { nullable: true })
    _count?: ProductCountAggregate

    @Field(() => ProductCountAggregate, { nullable: true })
    count?: ProductCountAggregate

    @Field(() => ProductAvgAggregate, { nullable: true })
    _avg?: ProductAvgAggregate

    @Field(() => ProductAvgAggregate, { nullable: true })
    avg?: ProductAvgAggregate

    @Field(() => ProductSumAggregate, { nullable: true })
    _sum?: ProductSumAggregate

    @Field(() => ProductSumAggregate, { nullable: true })
    sum?: ProductSumAggregate

    @Field(() => ProductMinAggregate, { nullable: true })
    _min?: ProductMinAggregate

    @Field(() => ProductMinAggregate, { nullable: true })
    min?: ProductMinAggregate

    @Field(() => ProductMaxAggregate, { nullable: true })
    _max?: ProductMaxAggregate

    @Field(() => ProductMaxAggregate, { nullable: true })
    max?: ProductMaxAggregate
}
