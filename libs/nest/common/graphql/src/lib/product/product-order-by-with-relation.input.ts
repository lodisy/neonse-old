import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { BrandOrderByRelationAggregateInput } from '../brand/brand-order-by-relation-aggregate.input';
import { ProductTypeOrderByRelationAggregateInput } from '../product-type/product-type-order-by-relation-aggregate.input';
import { ProductCategoryOrderByRelationAggregateInput } from '../product-category/product-category-order-by-relation-aggregate.input';
import { ProductVariantOrderByRelationAggregateInput } from '../product-variant/product-variant-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { ProductTranslationOrderByRelationAggregateInput } from '../product-translation/product-translation-order-by-relation-aggregate.input';

@InputType()
export class ProductOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    assets?: FileOrderByRelationAggregateInput;

    @Field(() => BrandOrderByRelationAggregateInput, {nullable:true})
    brands?: BrandOrderByRelationAggregateInput;

    @Field(() => ProductTypeOrderByRelationAggregateInput, {nullable:true})
    types?: ProductTypeOrderByRelationAggregateInput;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: ProductCategoryOrderByRelationAggregateInput;

    @Field(() => ProductVariantOrderByRelationAggregateInput, {nullable:true})
    variants?: ProductVariantOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    discription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    featured?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    draft?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stock?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sold?: keyof typeof SortOrder;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductTranslationOrderByRelationAggregateInput;
}
