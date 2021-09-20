import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductOrderByRelationAggregateInput } from '../product/product-order-by-relation-aggregate.input';
import { ProductCategoryOrderByRelationAggregateInput } from '../product-category/product-category-order-by-relation-aggregate.input';
import { ProductTypeTranslationOrderByRelationAggregateInput } from '../product-type-translation/product-type-translation-order-by-relation-aggregate.input';

@InputType()
export class ProductTypeOrderByWithRelationInput {

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

    @Field(() => ProductOrderByRelationAggregateInput, {nullable:true})
    products?: ProductOrderByRelationAggregateInput;

    @Field(() => ProductCategoryOrderByRelationAggregateInput, {nullable:true})
    categories?: ProductCategoryOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductTypeTranslationOrderByRelationAggregateInput, {nullable:true})
    translations?: ProductTypeTranslationOrderByRelationAggregateInput;
}
