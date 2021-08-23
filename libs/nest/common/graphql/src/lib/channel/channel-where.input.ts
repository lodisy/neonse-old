import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { EnumCurrencyCodeFilter } from '../prisma/enum-currency-code-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class ChannelWhereInput {

    @Field(() => [ChannelWhereInput], {nullable:true})
    AND?: Array<ChannelWhereInput>;

    @Field(() => [ChannelWhereInput], {nullable:true})
    OR?: Array<ChannelWhereInput>;

    @Field(() => [ChannelWhereInput], {nullable:true})
    NOT?: Array<ChannelWhereInput>;

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

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    Role?: RoleRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roleId?: StringNullableFilter;
}
