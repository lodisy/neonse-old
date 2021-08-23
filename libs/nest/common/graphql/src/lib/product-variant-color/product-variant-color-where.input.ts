import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantColorTranslationListRelationFilter } from '../product-variant-color-translation/product-variant-color-translation-list-relation-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantColorWhereInput {

    @Field(() => [ProductVariantColorWhereInput], {nullable:true})
    AND?: Array<ProductVariantColorWhereInput>;

    @Field(() => [ProductVariantColorWhereInput], {nullable:true})
    OR?: Array<ProductVariantColorWhereInput>;

    @Field(() => [ProductVariantColorWhereInput], {nullable:true})
    NOT?: Array<ProductVariantColorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ProductVariantColorTranslationListRelationFilter, {nullable:true})
    translations?: ProductVariantColorTranslationListRelationFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;
}
