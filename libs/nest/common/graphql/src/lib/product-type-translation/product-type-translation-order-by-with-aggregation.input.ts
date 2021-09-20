import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductTypeTranslationCountOrderByAggregateInput } from './product-type-translation-count-order-by-aggregate.input';
import { ProductTypeTranslationMaxOrderByAggregateInput } from './product-type-translation-max-order-by-aggregate.input';
import { ProductTypeTranslationMinOrderByAggregateInput } from './product-type-translation-min-order-by-aggregate.input';

@InputType()
export class ProductTypeTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productTypeId?: keyof typeof SortOrder;

    @Field(() => ProductTypeTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductTypeTranslationCountOrderByAggregateInput;

    @Field(() => ProductTypeTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductTypeTranslationMaxOrderByAggregateInput;

    @Field(() => ProductTypeTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductTypeTranslationMinOrderByAggregateInput;
}
