import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { OrderItemOrderByWithRelationInput } from './order-item-order-by-with-relation.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderItemCountAggregateInput } from './order-item-count-aggregate.input';
import { OrderItemAvgAggregateInput } from './order-item-avg-aggregate.input';
import { OrderItemSumAggregateInput } from './order-item-sum-aggregate.input';
import { OrderItemMinAggregateInput } from './order-item-min-aggregate.input';
import { OrderItemMaxAggregateInput } from './order-item-max-aggregate.input';

@ArgsType()
export class OrderItemAggregateArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    where?: OrderItemWhereInput;

    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;

    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: OrderItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderItemCountAggregateInput, {nullable:true})
    _count?: OrderItemCountAggregateInput;

    @Field(() => OrderItemAvgAggregateInput, {nullable:true})
    _avg?: OrderItemAvgAggregateInput;

    @Field(() => OrderItemSumAggregateInput, {nullable:true})
    _sum?: OrderItemSumAggregateInput;

    @Field(() => OrderItemMinAggregateInput, {nullable:true})
    _min?: OrderItemMinAggregateInput;

    @Field(() => OrderItemMaxAggregateInput, {nullable:true})
    _max?: OrderItemMaxAggregateInput;
}
