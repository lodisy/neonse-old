import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class BrandTranslationScalarWhereInput {

    @Field(() => [BrandTranslationScalarWhereInput], {nullable:true})
    AND?: Array<BrandTranslationScalarWhereInput>;

    @Field(() => [BrandTranslationScalarWhereInput], {nullable:true})
    OR?: Array<BrandTranslationScalarWhereInput>;

    @Field(() => [BrandTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<BrandTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    country?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    brandId?: StringFilter;
}
