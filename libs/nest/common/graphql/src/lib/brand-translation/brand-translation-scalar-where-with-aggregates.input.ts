import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class BrandTranslationScalarWhereWithAggregatesInput {

    @Field(() => [BrandTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BrandTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [BrandTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BrandTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [BrandTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BrandTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    country?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    brandId?: StringWithAggregatesFilter;
}
