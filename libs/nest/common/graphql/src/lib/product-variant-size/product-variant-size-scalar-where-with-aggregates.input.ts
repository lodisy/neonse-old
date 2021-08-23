import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductVariantSizeScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantSizeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantSizeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantSizeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantSizeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantSizeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantSizeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productVariantId?: StringNullableWithAggregatesFilter;
}
