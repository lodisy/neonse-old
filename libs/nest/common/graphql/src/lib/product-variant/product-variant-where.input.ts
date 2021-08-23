import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { ProductVariantSizeRelationFilter } from '../product-variant-size/product-variant-size-relation-filter.input';
import { ProductVariantColorRelationFilter } from '../product-variant-color/product-variant-color-relation-filter.input';
import { ProductVariantStyleRelationFilter } from '../product-variant-style/product-variant-style-relation-filter.input';
import { EnumCurrencyCodeFilter } from '../prisma/enum-currency-code-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ChannelListRelationFilter } from '../channel/channel-list-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductVariantTranslationListRelationFilter } from '../product-variant-translation/product-variant-translation-list-relation-filter.input';

@InputType()
export class ProductVariantWhereInput {

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    AND?: Array<ProductVariantWhereInput>;

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    OR?: Array<ProductVariantWhereInput>;

    @Field(() => [ProductVariantWhereInput], {nullable:true})
    NOT?: Array<ProductVariantWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    assets?: FileListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    brands?: StringFilter;

    @Field(() => ProductVariantSizeRelationFilter, {nullable:true})
    size?: ProductVariantSizeRelationFilter;

    @Field(() => ProductVariantColorRelationFilter, {nullable:true})
    color?: ProductVariantColorRelationFilter;

    @Field(() => ProductVariantStyleRelationFilter, {nullable:true})
    style?: ProductVariantStyleRelationFilter;

    @Field(() => EnumCurrencyCodeFilter, {nullable:true})
    currencyCode?: EnumCurrencyCodeFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sale?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    stock?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    sold?: IntFilter;

    @Field(() => ChannelListRelationFilter, {nullable:true})
    channels?: ChannelListRelationFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    draft?: BoolNullableFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ProductVariantTranslationListRelationFilter, {nullable:true})
    translations?: ProductVariantTranslationListRelationFilter;
}
