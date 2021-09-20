import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RefundCountOrderByAggregateInput } from './refund-count-order-by-aggregate.input';
import { RefundMaxOrderByAggregateInput } from './refund-max-order-by-aggregate.input';
import { RefundMinOrderByAggregateInput } from './refund-min-order-by-aggregate.input';

@InputType()
export class RefundOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reason?: keyof typeof SortOrder;

    @Field(() => RefundCountOrderByAggregateInput, {nullable:true})
    _count?: RefundCountOrderByAggregateInput;

    @Field(() => RefundMaxOrderByAggregateInput, {nullable:true})
    _max?: RefundMaxOrderByAggregateInput;

    @Field(() => RefundMinOrderByAggregateInput, {nullable:true})
    _min?: RefundMinOrderByAggregateInput;
}
