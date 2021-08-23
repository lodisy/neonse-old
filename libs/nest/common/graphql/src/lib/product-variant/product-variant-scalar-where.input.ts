import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumCurrencyCodeFilter } from '../prisma/enum-currency-code-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';

@InputType()
export class ProductVariantScalarWhereInput {

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantScalarWhereInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantScalarWhereInput>;

    @Field(() => [ProductVariantScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    brands?: StringFilter;

    @Field(() => EnumCurrencyCodeFilter, {nullable:true})
    currencyCode?: EnumCurrencyCodeFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sale?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    stock?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sold?: IntFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    draft?: BoolNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;
}
