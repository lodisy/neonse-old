import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantStyleRelationFilter } from '../product-variant-style/product-variant-style-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantStyleTranslationWhereInput {

    @Field(() => [ProductVariantStyleTranslationWhereInput], {nullable:true})
    AND?: Array<ProductVariantStyleTranslationWhereInput>;

    @Field(() => [ProductVariantStyleTranslationWhereInput], {nullable:true})
    OR?: Array<ProductVariantStyleTranslationWhereInput>;

    @Field(() => [ProductVariantStyleTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductVariantStyleTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductVariantStyleRelationFilter, {nullable:true})
    productVariantStyle?: ProductVariantStyleRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantStyleId?: StringNullableFilter;
}
