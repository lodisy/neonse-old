import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantColorRelationFilter } from '../product-variant-color/product-variant-color-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantColorTranslationWhereInput {

    @Field(() => [ProductVariantColorTranslationWhereInput], {nullable:true})
    AND?: Array<ProductVariantColorTranslationWhereInput>;

    @Field(() => [ProductVariantColorTranslationWhereInput], {nullable:true})
    OR?: Array<ProductVariantColorTranslationWhereInput>;

    @Field(() => [ProductVariantColorTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductVariantColorTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductVariantColorRelationFilter, {nullable:true})
    ProductVariantColor?: ProductVariantColorRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantColorId?: StringNullableFilter;
}
