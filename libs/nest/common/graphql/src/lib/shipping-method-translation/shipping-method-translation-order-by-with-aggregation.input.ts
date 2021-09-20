import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ShippingMethodTranslationCountOrderByAggregateInput } from './shipping-method-translation-count-order-by-aggregate.input';
import { ShippingMethodTranslationMaxOrderByAggregateInput } from './shipping-method-translation-max-order-by-aggregate.input';
import { ShippingMethodTranslationMinOrderByAggregateInput } from './shipping-method-translation-min-order-by-aggregate.input';

@InputType()
export class ShippingMethodTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shippingMethodId?: keyof typeof SortOrder;

    @Field(() => ShippingMethodTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ShippingMethodTranslationCountOrderByAggregateInput;

    @Field(() => ShippingMethodTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ShippingMethodTranslationMaxOrderByAggregateInput;

    @Field(() => ShippingMethodTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ShippingMethodTranslationMinOrderByAggregateInput;
}
