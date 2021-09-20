import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantColorTranslationCountOrderByAggregateInput } from './product-variant-color-translation-count-order-by-aggregate.input';
import { ProductVariantColorTranslationMaxOrderByAggregateInput } from './product-variant-color-translation-max-order-by-aggregate.input';
import { ProductVariantColorTranslationMinOrderByAggregateInput } from './product-variant-color-translation-min-order-by-aggregate.input';

@InputType()
export class ProductVariantColorTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantColorId?: keyof typeof SortOrder;

    @Field(() => ProductVariantColorTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantColorTranslationCountOrderByAggregateInput;

    @Field(() => ProductVariantColorTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantColorTranslationMaxOrderByAggregateInput;

    @Field(() => ProductVariantColorTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantColorTranslationMinOrderByAggregateInput;
}
