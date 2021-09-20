import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShippingMethodCountOrderByAggregateInput } from './shipping-method-count-order-by-aggregate.input';
import { ShippingMethodMaxOrderByAggregateInput } from './shipping-method-max-order-by-aggregate.input';
import { ShippingMethodMinOrderByAggregateInput } from './shipping-method-min-order-by-aggregate.input';

@InputType()
export class ShippingMethodOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ShippingMethodCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingMethodCountOrderByAggregateInput;

    @Field(() => ShippingMethodMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingMethodMaxOrderByAggregateInput;

    @Field(() => ShippingMethodMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingMethodMinOrderByAggregateInput;
}
