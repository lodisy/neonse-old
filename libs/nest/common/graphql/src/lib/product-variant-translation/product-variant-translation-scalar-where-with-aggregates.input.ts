import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductVariantTranslationScalarWhereWithAggregatesInput {

    @Field(() => [ProductVariantTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductVariantTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductVariantTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductVariantTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductVariantTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productVariantId?: StringNullableWithAggregatesFilter;
}
