import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantStyleTranslationCountOrderByAggregateInput } from './product-variant-style-translation-count-order-by-aggregate.input';
import { ProductVariantStyleTranslationMaxOrderByAggregateInput } from './product-variant-style-translation-max-order-by-aggregate.input';
import { ProductVariantStyleTranslationMinOrderByAggregateInput } from './product-variant-style-translation-min-order-by-aggregate.input';

@InputType()
export class ProductVariantStyleTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantStyleId?: keyof typeof SortOrder;

    @Field(() => ProductVariantStyleTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantStyleTranslationCountOrderByAggregateInput;

    @Field(() => ProductVariantStyleTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantStyleTranslationMaxOrderByAggregateInput;

    @Field(() => ProductVariantStyleTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantStyleTranslationMinOrderByAggregateInput;
}
