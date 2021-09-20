import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductVariantStyleCountOrderByAggregateInput } from './product-variant-style-count-order-by-aggregate.input';
import { ProductVariantStyleMaxOrderByAggregateInput } from './product-variant-style-max-order-by-aggregate.input';
import { ProductVariantStyleMinOrderByAggregateInput } from './product-variant-style-min-order-by-aggregate.input';

@InputType()
export class ProductVariantStyleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;

    @Field(() => ProductVariantStyleCountOrderByAggregateInput, {nullable:true})
    _count?: ProductVariantStyleCountOrderByAggregateInput;

    @Field(() => ProductVariantStyleMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductVariantStyleMaxOrderByAggregateInput;

    @Field(() => ProductVariantStyleMinOrderByAggregateInput, {nullable:true})
    _min?: ProductVariantStyleMinOrderByAggregateInput;
}
