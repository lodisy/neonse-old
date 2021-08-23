import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';

@InputType()
export class OrderItemWhereInput {

    @Field(() => [OrderItemWhereInput], {nullable:true})
    AND?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    OR?: Array<OrderItemWhereInput>;

    @Field(() => [OrderItemWhereInput], {nullable:true})
    NOT?: Array<OrderItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    image?: FileRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    brands?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    size?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    style?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    unitPrice?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    unitPriceWithTax?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    discountedUnitPrice?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    discountedUnitPriceWithTax?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    quantity?: IntFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fileId?: StringFilter;
}
