import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderItemCountOrderByAggregateInput } from './order-item-count-order-by-aggregate.input';
import { OrderItemAvgOrderByAggregateInput } from './order-item-avg-order-by-aggregate.input';
import { OrderItemMaxOrderByAggregateInput } from './order-item-max-order-by-aggregate.input';
import { OrderItemMinOrderByAggregateInput } from './order-item-min-order-by-aggregate.input';
import { OrderItemSumOrderByAggregateInput } from './order-item-sum-order-by-aggregate.input';

@InputType()
export class OrderItemOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brands?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    style?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;

    @Field(() => OrderItemCountOrderByAggregateInput, {nullable:true})
    _count?: OrderItemCountOrderByAggregateInput;

    @Field(() => OrderItemAvgOrderByAggregateInput, {nullable:true})
    _avg?: OrderItemAvgOrderByAggregateInput;

    @Field(() => OrderItemMaxOrderByAggregateInput, {nullable:true})
    _max?: OrderItemMaxOrderByAggregateInput;

    @Field(() => OrderItemMinOrderByAggregateInput, {nullable:true})
    _min?: OrderItemMinOrderByAggregateInput;

    @Field(() => OrderItemSumOrderByAggregateInput, {nullable:true})
    _sum?: OrderItemSumOrderByAggregateInput;
}
