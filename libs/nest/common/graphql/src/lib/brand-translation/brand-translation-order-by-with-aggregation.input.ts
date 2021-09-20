import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BrandTranslationCountOrderByAggregateInput } from './brand-translation-count-order-by-aggregate.input';
import { BrandTranslationMaxOrderByAggregateInput } from './brand-translation-max-order-by-aggregate.input';
import { BrandTranslationMinOrderByAggregateInput } from './brand-translation-min-order-by-aggregate.input';

@InputType()
export class BrandTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    brandId?: keyof typeof SortOrder;

    @Field(() => BrandTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: BrandTranslationCountOrderByAggregateInput;

    @Field(() => BrandTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: BrandTranslationMaxOrderByAggregateInput;

    @Field(() => BrandTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: BrandTranslationMinOrderByAggregateInput;
}
