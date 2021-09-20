import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AddressCountOrderByAggregateInput } from './address-count-order-by-aggregate.input';
import { AddressMaxOrderByAggregateInput } from './address-max-order-by-aggregate.input';
import { AddressMinOrderByAggregateInput } from './address-min-order-by-aggregate.input';

@InputType()
export class AddressOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetLine1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetLine2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    district?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    default?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => AddressCountOrderByAggregateInput, {nullable:true})
    _count?: AddressCountOrderByAggregateInput;

    @Field(() => AddressMaxOrderByAggregateInput, {nullable:true})
    _max?: AddressMaxOrderByAggregateInput;

    @Field(() => AddressMinOrderByAggregateInput, {nullable:true})
    _min?: AddressMinOrderByAggregateInput;
}
