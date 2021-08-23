import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { EnumCurrencyCodeFilter } from '../prisma/enum-currency-code-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ChannelScalarWhereInput {

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    AND?: Array<ChannelScalarWhereInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    OR?: Array<ChannelScalarWhereInput>;

    @Field(() => [ChannelScalarWhereInput], {nullable:true})
    NOT?: Array<ChannelScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    token?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    defaultLanguageCode?: EnumLanguageCodeFilter;

    @Field(() => EnumCurrencyCodeFilter, {nullable:true})
    currencyCode?: EnumCurrencyCodeFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    priceIncludeTax?: BoolNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roleId?: StringNullableFilter;
}
