import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';

@InputType()
export class OrderAddressWhereInput {

    @Field(() => [OrderAddressWhereInput], {nullable:true})
    AND?: Array<OrderAddressWhereInput>;

    @Field(() => [OrderAddressWhereInput], {nullable:true})
    OR?: Array<OrderAddressWhereInput>;

    @Field(() => [OrderAddressWhereInput], {nullable:true})
    NOT?: Array<OrderAddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fullname?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    streetLine1?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    streetLine2?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    district?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;
}
