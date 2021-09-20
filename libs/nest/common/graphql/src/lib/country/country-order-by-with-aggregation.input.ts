import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryCountOrderByAggregateInput } from './country-count-order-by-aggregate.input';
import { CountryMaxOrderByAggregateInput } from './country-max-order-by-aggregate.input';
import { CountryMinOrderByAggregateInput } from './country-min-order-by-aggregate.input';

@InputType()
export class CountryOrderByWithAggregationInput {

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
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingZoneId?: keyof typeof SortOrder;

    @Field(() => CountryCountOrderByAggregateInput, {nullable:true})
    _count?: CountryCountOrderByAggregateInput;

    @Field(() => CountryMaxOrderByAggregateInput, {nullable:true})
    _max?: CountryMaxOrderByAggregateInput;

    @Field(() => CountryMinOrderByAggregateInput, {nullable:true})
    _min?: CountryMinOrderByAggregateInput;
}
