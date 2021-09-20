import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantTranslationCountOrderByAggregateInput } from './product-variant-translation-count-order-by-aggregate.input';
import { ProductVariantTranslationMaxOrderByAggregateInput } from './product-variant-translation-max-order-by-aggregate.input';
import { ProductVariantTranslationMinOrderByAggregateInput } from './product-variant-translation-min-order-by-aggregate.input';

@InputType()
export class ProductVariantTranslationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => ProductVariantTranslationCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantTranslationCountOrderByAggregateInput;

    @Field(() => ProductVariantTranslationMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantTranslationMaxOrderByAggregateInput;

    @Field(() => ProductVariantTranslationMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantTranslationMinOrderByAggregateInput;
}
