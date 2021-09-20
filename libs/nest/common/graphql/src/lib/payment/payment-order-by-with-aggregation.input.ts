import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PaymentCountOrderByAggregateInput } from './payment-count-order-by-aggregate.input';
import { PaymentMaxOrderByAggregateInput } from './payment-max-order-by-aggregate.input';
import { PaymentMinOrderByAggregateInput } from './payment-min-order-by-aggregate.input';

@InputType()
export class PaymentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    errorMessage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => PaymentCountOrderByAggregateInput, {nullable:true})
    _count?: PaymentCountOrderByAggregateInput;

    @Field(() => PaymentMaxOrderByAggregateInput, {nullable:true})
    _max?: PaymentMaxOrderByAggregateInput;

    @Field(() => PaymentMinOrderByAggregateInput, {nullable:true})
    _min?: PaymentMinOrderByAggregateInput;
}
