import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductCategoryTranslationScalarWhereWithAggregatesInput {

    @Field(() => [ProductCategoryTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductCategoryTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductCategoryTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductCategoryTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductCategoryTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productCategoryId?: StringNullableWithAggregatesFilter;
}
