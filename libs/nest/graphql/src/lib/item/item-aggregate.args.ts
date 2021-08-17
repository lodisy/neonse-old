import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ItemWhereInput } from './item-where.input'
import { ItemOrderByInput } from './item-order-by.input'
import { ItemWhereUniqueInput } from './item-where-unique.input'
import { Int } from '@nestjs/graphql'
import { ItemCountAggregateInput } from './item-count-aggregate.input'
import { ItemAvgAggregateInput } from './item-avg-aggregate.input'
import { ItemSumAggregateInput } from './item-sum-aggregate.input'
import { ItemMinAggregateInput } from './item-min-aggregate.input'
import { ItemMaxAggregateInput } from './item-max-aggregate.input'

@ArgsType()
export class ItemAggregateArgs {
    @Field(() => ItemWhereInput, { nullable: true })
    where?: ItemWhereInput

    @Field(() => [ItemOrderByInput], { nullable: true })
    orderBy?: Array<ItemOrderByInput>

    @Field(() => ItemWhereUniqueInput, { nullable: true })
    cursor?: ItemWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => ItemCountAggregateInput, { nullable: true })
    _count?: ItemCountAggregateInput

    @Field(() => ItemAvgAggregateInput, { nullable: true })
    _avg?: ItemAvgAggregateInput

    @Field(() => ItemSumAggregateInput, { nullable: true })
    _sum?: ItemSumAggregateInput

    @Field(() => ItemMinAggregateInput, { nullable: true })
    _min?: ItemMinAggregateInput

    @Field(() => ItemMaxAggregateInput, { nullable: true })
    _max?: ItemMaxAggregateInput
}
