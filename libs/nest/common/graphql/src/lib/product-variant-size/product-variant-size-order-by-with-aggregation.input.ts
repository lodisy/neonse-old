import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantSizeCountOrderByAggregateInput } from './product-variant-size-count-order-by-aggregate.input';
import { ProductVariantSizeMaxOrderByAggregateInput } from './product-variant-size-max-order-by-aggregate.input';
import { ProductVariantSizeMinOrderByAggregateInput } from './product-variant-size-min-order-by-aggregate.input';

@InputType()
export class ProductVariantSizeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => ProductVariantSizeCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantSizeCountOrderByAggregateInput;

    @Field(() => ProductVariantSizeMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantSizeMaxOrderByAggregateInput;

    @Field(() => ProductVariantSizeMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantSizeMinOrderByAggregateInput;
}
