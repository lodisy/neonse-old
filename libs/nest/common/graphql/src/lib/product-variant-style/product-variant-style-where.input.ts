import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FileRelationFilter } from '../file/file-relation-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantStyleTranslationListRelationFilter } from '../product-variant-style-translation/product-variant-style-translation-list-relation-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantStyleWhereInput {

    @Field(() => [ProductVariantStyleWhereInput], {nullable:true})
    AND?: Array<ProductVariantStyleWhereInput>;

    @Field(() => [ProductVariantStyleWhereInput], {nullable:true})
    OR?: Array<ProductVariantStyleWhereInput>;

    @Field(() => [ProductVariantStyleWhereInput], {nullable:true})
    NOT?: Array<ProductVariantStyleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FileRelationFilter, {nullable:true})
    asset?: FileRelationFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ProductVariantStyleTranslationListRelationFilter, {nullable:true})
    translations?: ProductVariantStyleTranslationListRelationFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    productVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fileId?: StringFilter;
}
