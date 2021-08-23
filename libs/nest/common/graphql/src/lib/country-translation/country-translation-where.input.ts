import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { CountryRelationFilter } from '../country/country-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CountryTranslationWhereInput {

    @Field(() => [CountryTranslationWhereInput], {nullable:true})
    AND?: Array<CountryTranslationWhereInput>;

    @Field(() => [CountryTranslationWhereInput], {nullable:true})
    OR?: Array<CountryTranslationWhereInput>;

    @Field(() => [CountryTranslationWhereInput], {nullable:true})
    NOT?: Array<CountryTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CountryRelationFilter, {nullable:true})
    country?: CountryRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryId?: StringNullableFilter;
}
