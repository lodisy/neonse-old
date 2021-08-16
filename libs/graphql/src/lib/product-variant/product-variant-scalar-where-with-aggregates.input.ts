import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { EnumSizeWithAggregatesFilter } from '../prisma/enum-size-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class ProductVariantScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    productId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @HideField()
    sku?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brands?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    style?: StringWithAggregatesFilter;

    @Field(() => EnumSizeWithAggregatesFilter, {nullable:true})
    size?: EnumSizeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sale?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    stock?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    sold?: IntWithAggregatesFilter;
}
