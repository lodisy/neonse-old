import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CountryTranslationScalarWhereInput {

    @Field(() => [CountryTranslationScalarWhereInput], {nullable:true})
    AND?: Array<CountryTranslationScalarWhereInput>;

    @Field(() => [CountryTranslationScalarWhereInput], {nullable:true})
    OR?: Array<CountryTranslationScalarWhereInput>;

    @Field(() => [CountryTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<CountryTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryId?: StringNullableFilter;
}
