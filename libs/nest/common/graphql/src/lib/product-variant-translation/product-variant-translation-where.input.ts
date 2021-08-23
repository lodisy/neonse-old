import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantTranslationWhereInput {

    @Field(() => [ProductVariantTranslationWhereInput], {nullable:true})
    AND?: Array<ProductVariantTranslationWhereInput>;

    @Field(() => [ProductVariantTranslationWhereInput], {nullable:true})
    OR?: Array<ProductVariantTranslationWhereInput>;

    @Field(() => [ProductVariantTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductVariantTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    ProductVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;
}
