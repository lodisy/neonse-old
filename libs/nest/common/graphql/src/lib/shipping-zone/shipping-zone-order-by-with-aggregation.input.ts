import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShippingZoneCountOrderByAggregateInput } from './shipping-zone-count-order-by-aggregate.input';
import { ShippingZoneMaxOrderByAggregateInput } from './shipping-zone-max-order-by-aggregate.input';
import { ShippingZoneMinOrderByAggregateInput } from './shipping-zone-min-order-by-aggregate.input';

@InputType()
export class ShippingZoneOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ShippingZoneCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingZoneCountOrderByAggregateInput;

    @Field(() => ShippingZoneMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingZoneMaxOrderByAggregateInput;

    @Field(() => ShippingZoneMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingZoneMinOrderByAggregateInput;
}
