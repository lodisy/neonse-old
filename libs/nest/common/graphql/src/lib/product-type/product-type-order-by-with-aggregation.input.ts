import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProductTypeCountOrderByAggregateInput } from './product-type-count-order-by-aggregate.input';
import { ProductTypeMaxOrderByAggregateInput } from './product-type-max-order-by-aggregate.input';
import { ProductTypeMinOrderByAggregateInput } from './product-type-min-order-by-aggregate.input';

@InputType()
export class ProductTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => ProductTypeCountOrderByAggregateInput, {nullable:true})
    _count?: ProductTypeCountOrderByAggregateInput;

    @Field(() => ProductTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: ProductTypeMaxOrderByAggregateInput;

    @Field(() => ProductTypeMinOrderByAggregateInput, {nullable:true})
    _min?: ProductTypeMinOrderByAggregateInput;
}
