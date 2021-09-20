import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantColorCountOrderByAggregateInput } from './product-variant-color-count-order-by-aggregate.input';
import { ProductVariantColorMaxOrderByAggregateInput } from './product-variant-color-max-order-by-aggregate.input';
import { ProductVariantColorMinOrderByAggregateInput } from './product-variant-color-min-order-by-aggregate.input';

@InputType()
export class ProductVariantColorOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => ProductVariantColorCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantColorCountOrderByAggregateInput;

    @Field(() => ProductVariantColorMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantColorMaxOrderByAggregateInput;

    @Field(() => ProductVariantColorMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantColorMinOrderByAggregateInput;
}
