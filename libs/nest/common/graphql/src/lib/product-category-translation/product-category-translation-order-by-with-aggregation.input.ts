import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductCategoryTranslationCountOrderByAggregateInput } from './product-category-translation-count-order-by-aggregate.input';
import { ProductCategoryTranslationMaxOrderByAggregateInput } from './product-category-translation-max-order-by-aggregate.input';
import { ProductCategoryTranslationMinOrderByAggregateInput } from './product-category-translation-min-order-by-aggregate.input';

@InputType()
export class ProductCategoryTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productCategoryId?: keyof typeof SortOrder;

    @Field(() => ProductCategoryTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductCategoryTranslationCountOrderByAggregateInput;

    @Field(() => ProductCategoryTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductCategoryTranslationMaxOrderByAggregateInput;

    @Field(() => ProductCategoryTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductCategoryTranslationMinOrderByAggregateInput;
}
