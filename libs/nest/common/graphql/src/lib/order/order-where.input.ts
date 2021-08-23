import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumOrderStatusFilter } from '../prisma/enum-order-status-filter.input';
import { OrderAddressRelationFilter } from '../order-address/order-address-relation-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PaymentRelationFilter } from '../payment/payment-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class OrderWhereInput {

    @Field(() => [OrderWhereInput], {nullable:true})
    AND?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    OR?: Array<OrderWhereInput>;

    @Field(() => [OrderWhereInput], {nullable:true})
    NOT?: Array<OrderWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    placedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    pending?: BoolFilter;

    @Field(() => EnumOrderStatusFilter, {nullable:true})
    status?: EnumOrderStatusFilter;

    @Field(() => OrderAddressRelationFilter, {nullable:true})
    address?: OrderAddressRelationFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    items?: OrderItemListRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    totalQuantity?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    subTotal?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    subTotalWithTax?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    total?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalWithTax?: IntFilter;

    @Field(() => PaymentRelationFilter, {nullable:true})
    payment?: PaymentRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tracking?: StringNullableFilter;
}
