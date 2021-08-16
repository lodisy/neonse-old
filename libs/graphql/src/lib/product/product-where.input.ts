import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { BrandListRelationFilter } from '../brand/brand-list-relation-filter.input';
import { ProductTypeListRelationFilter } from '../product-type/product-type-list-relation-filter.input';
import { ProductCategoryListRelationFilter } from '../product-category/product-category-list-relation-filter.input';
import { ProductVariantListRelationFilter } from '../product-variant/product-variant-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { LikeListRelationFilter } from '../like/like-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ProductWhereInput {

    @Field(() => [ProductWhereInput], {nullable:true})
    AND?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    OR?: Array<ProductWhereInput>;

    @Field(() => [ProductWhereInput], {nullable:true})
    NOT?: Array<ProductWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sku?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;

    @Field(() => BrandListRelationFilter, {nullable:true})
    brands?: BrandListRelationFilter;

    @Field(() => ProductTypeListRelationFilter, {nullable:true})
    types?: ProductTypeListRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    categories?: ProductCategoryListRelationFilter;

    @Field(() => ProductVariantListRelationFilter, {nullable:true})
    variants?: ProductVariantListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    discription?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    featured?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    draft?: BoolNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    stock?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sold?: IntNullableFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => LikeListRelationFilter, {nullable:true})
    likes?: LikeListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
