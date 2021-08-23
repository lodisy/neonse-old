import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductVariantStyleTranslationScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantStyleTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantStyleTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantStyleTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantStyleTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantStyleTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantStyleTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productVariantStyleId?: StringNullableWithAggregatesFilter;
}
