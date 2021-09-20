import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CountryTranslationOrderByRelationAggregateInput } from '../country-translation/country-translation-order-by-relation-aggregate.input';
import { AddressOrderByRelationAggregateInput } from '../address/address-order-by-relation-aggregate.input';
import { ShippingZoneOrderByWithRelationInput } from '../shipping-zone/shipping-zone-order-by-with-relation.input';

@InputType()
export class CountryOrderByWithRelationInput {

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

    @Field(() => CountryTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: CountryTranslationOrderByRelationAggregateInput;

    @Field(() => AddressOrderByRelationAggregateInput, {nullable:true})
    address?: AddressOrderByRelationAggregateInput;

    @Field(() => ShippingZoneOrderByWithRelationInput, {nullable:true})
    shippingZone?: ShippingZoneOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    shippingZoneId?: keyof typeof SortOrder;
}
