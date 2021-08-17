import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductWhereInput } from './product-where.input'
import { ProductOrderByInput } from './product-order-by.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { Int } from '@nestjs/graphql'
import { ProductCountAggregateInput } from './product-count-aggregate.input'
import { ProductAvgAggregateInput } from './product-avg-aggregate.input'
import { ProductSumAggregateInput } from './product-sum-aggregate.input'
import { ProductMinAggregateInput } from './product-min-aggregate.input'
import { ProductMaxAggregateInput } from './product-max-aggregate.input'

@ArgsType()
export class ProductAggregateArgs {
    @Field(() => ProductWhereInput, { nullable: true })
    where?: ProductWhereInput

    @Field(() => [ProductOrderByInput], { nullable: true })
    orderBy?: Array<ProductOrderByInput>

    @Field(() => ProductWhereUniqueInput, { nullable: true })
    cursor?: ProductWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => ProductCountAggregateInput, { nullable: true })
    _count?: ProductCountAggregateInput

    @Field(() => ProductAvgAggregateInput, { nullable: true })
    _avg?: ProductAvgAggregateInput

    @Field(() => ProductSumAggregateInput, { nullable: true })
    _sum?: ProductSumAggregateInput

    @Field(() => ProductMinAggregateInput, { nullable: true })
    _min?: ProductMinAggregateInput

    @Field(() => ProductMaxAggregateInput, { nullable: true })
    _max?: ProductMaxAggregateInput
}
