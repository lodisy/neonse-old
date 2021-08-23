import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ProductTranslationScalarWhereWithAggregatesInput {

    @Field(() => [ProductTranslationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTranslationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductTranslationScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTranslationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductTranslationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    discription?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: StringNullableWithAggregatesFilter;
}
