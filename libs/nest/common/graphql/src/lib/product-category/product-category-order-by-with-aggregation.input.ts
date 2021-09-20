import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCategoryCountOrderByAggregateInput } from './product-category-count-order-by-aggregate.input';
import { ProductCategoryMaxOrderByAggregateInput } from './product-category-max-order-by-aggregate.input';
import { ProductCategoryMinOrderByAggregateInput } from './product-category-min-order-by-aggregate.input';

@InputType()
export class ProductCategoryOrderByWithAggregationInput {

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

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductCategoryCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCategoryCountOrderByAggregateInput;

    @Field(() => ProductCategoryMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductCategoryMaxOrderByAggregateInput;

    @Field(() => ProductCategoryMinOrderByAggregateInput, {nullable:true})
    _min?: ProductCategoryMinOrderByAggregateInput;
}
