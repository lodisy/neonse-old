import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumFileTypeFilter } from '../prisma/enum-file-type-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { SourceRelationFilter } from '../source/source-relation-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { OrderItemListRelationFilter } from '../order-item/order-item-list-relation-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';
import { ProductVariantRelationFilter } from '../product-variant/product-variant-relation-filter.input';
import { ProductVariantStyleListRelationFilter } from '../product-variant-style/product-variant-style-list-relation-filter.input';
import { ReviewRelationFilter } from '../review/review-relation-filter.input';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    alt?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    caption?: StringNullableFilter;

    @Field(() => EnumFileTypeFilter, {nullable:true})
    format?: EnumFileTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    mimeType?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    size?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    width?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    height?: IntNullableFilter;

    @Field(() => SourceRelationFilter, {nullable:true})
    source?: SourceRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    sourceId?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    autoPlay?: BoolNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profileAvatar?: ProfileRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileAvatarId?: StringNullableFilter;

    @Field(() => OrderItemListRelationFilter, {nullable:true})
    OrderItem?: OrderItemListRelationFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    Product?: ProductRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;

    @Field(() => ProductVariantRelationFilter, {nullable:true})
    ProductVariant?: ProductVariantRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;

    @Field(() => ProductVariantStyleListRelationFilter, {nullable:true})
    ProductVariantStyle?: ProductVariantStyleListRelationFilter;

    @Field(() => ReviewRelationFilter, {nullable:true})
    Review?: ReviewRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reviewId?: StringNullableFilter;
}
