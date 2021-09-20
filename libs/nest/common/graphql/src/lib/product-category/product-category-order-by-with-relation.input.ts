import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCategoryOrderByRelationAggregateInput } from './product-category-order-by-relation-aggregate.input';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { ProductTypeOrderByRelationAggregateInput } from '../product-type/product-type-order-by-relation-aggregate.input';
import { ProductCategoryTranslationOrderByRelationAggregateInput } from '../product-category-translation/product-category-translation-order-by-relation-aggregate.input';

@InputType()
export class ProductCategoryOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parentId?: keyof typeof SortOrder;

    @Field(() => ProductCategoryOrderByWithRelationInput, {nullable:true})
    parent?: ProductCategoryOrderByWithRelationInput;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    children?: ProductCategoryOrderByRelationAggregateInput;

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => ProductTypeOrderByRelationAggregateInput, {nullable:true})
    types?: ProductTypeOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductCategoryTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductCategoryTranslationOrderByRelationAggregateInput;
}
