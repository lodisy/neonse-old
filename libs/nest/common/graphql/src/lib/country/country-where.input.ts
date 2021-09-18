import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { CountryTranslationListRelationFilter } from '../country-translation/country-translation-list-relation-filter.input';
import { AddressListRelationFilter } from '../address/address-list-relation-filter.input';
import { ShippingZoneRelationFilter } from '../shipping-zone/shipping-zone-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CountryWhereInput {

    @Field(() => [CountryWhereInput], {nullable:true})
    AND?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    OR?: Array<CountryWhereInput>;

    @Field(() => [CountryWhereInput], {nullable:true})
    NOT?: Array<CountryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    enabled?: BoolFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => CountryTranslationListRelationFilter, {nullable:true})
    translations?: CountryTranslationListRelationFilter;

    @Field(() => AddressListRelationFilter, {nullable:true})
    address?: AddressListRelationFilter;

    @Field(() => ShippingZoneRelationFilter, {nullable:true})
    shippingZone?: ShippingZoneRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shippingZoneId?: StringNullableFilter;
}
