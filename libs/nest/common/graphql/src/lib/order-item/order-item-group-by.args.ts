import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { OrderItemOrderByInput } from './order-item-order-by.input';
import { OrderItemScalarFieldEnum } from './order-item-scalar-field.enum';
import { OrderItemScalarWhereWithAggregatesInput } from './order-item-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderItemCountAggregateInput } from './order-item-count-aggregate.input';
import { OrderItemAvgAggregateInput } from './order-item-avg-aggregate.input';
import { OrderItemSumAggregateInput } from './order-item-sum-aggregate.input';
import { OrderItemMinAggregateInput } from './order-item-min-aggregate.input';
import { OrderItemMaxAggregateInput } from './order-item-max-aggregate.input';

@ArgsType()
export class OrderItemGroupByArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    where?: OrderItemWhereInput;

    @Field(() => [OrderItemOrderByInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByInput>;

    @Field(() => [OrderItemScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderItemScalarFieldEnum>;

    @Field(() => OrderItemScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderItemScalarWhereWithAggregatesInput;

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
