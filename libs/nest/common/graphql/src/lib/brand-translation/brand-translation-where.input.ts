import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BrandRelationFilter } from '../brand/brand-relation-filter.input';

@InputType()
export class BrandTranslationWhereInput {

    @Field(() => [BrandTranslationWhereInput], {nullable:true})
    AND?: Array<BrandTranslationWhereInput>;

    @Field(() => [BrandTranslationWhereInput], {nullable:true})
    OR?: Array<BrandTranslationWhereInput>;

    @Field(() => [BrandTranslationWhereInput], {nullable:true})
    NOT?: Array<BrandTranslationWhereInput>;

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

    @Field(() => BrandRelationFilter, {nullable:true})
    brand?: BrandRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    brandId?: StringFilter;
}
