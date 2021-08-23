import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { EnumCurrencyCodeWithAggregatesFilter } from '../prisma/enum-currency-code-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ChannelScalarWhereWithAggregatesInput {

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => [ChannelScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ChannelScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    defaultLanguageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => EnumCurrencyCodeWithAggregatesFilter, {nullable:true})
    currencyCode?: EnumCurrencyCodeWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    priceIncludeTax?: BoolNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    customFields?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productVariantId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    roleId?: StringNullableWithAggregatesFilter;
}
