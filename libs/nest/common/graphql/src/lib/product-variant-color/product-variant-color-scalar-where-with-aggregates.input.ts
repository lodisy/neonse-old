import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductVariantColorScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantColorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantColorScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantColorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantColorScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantColorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantColorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productVariantId?: StringNullableWithAggregatesFilter;
}
