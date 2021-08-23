import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class OrderItemScalarWhereInput {

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    AND?: Array<OrderItemScalarWhereInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    OR?: Array<OrderItemScalarWhereInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    NOT?: Array<OrderItemScalarWhereInput>;

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

    @Field(() => StringNullableFilter, {nullable:true})
    orderId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fileId?: StringFilter;
}
