import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductTranslationCountOrderByAggregateInput } from './product-translation-count-order-by-aggregate.input';
import { ProductTranslationMaxOrderByAggregateInput } from './product-translation-max-order-by-aggregate.input';
import { ProductTranslationMinOrderByAggregateInput } from './product-translation-min-order-by-aggregate.input';

@InputType()
export class ProductTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discription?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => ProductTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductTranslationCountOrderByAggregateInput;

    @Field(() => ProductTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductTranslationMaxOrderByAggregateInput;

    @Field(() => ProductTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductTranslationMinOrderByAggregateInput;
}
