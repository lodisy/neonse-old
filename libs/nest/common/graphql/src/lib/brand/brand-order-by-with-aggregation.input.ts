import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BrandCountOrderByAggregateInput } from './brand-count-order-by-aggregate.input';
import { BrandAvgOrderByAggregateInput } from './brand-avg-order-by-aggregate.input';
import { BrandMaxOrderByAggregateInput } from './brand-max-order-by-aggregate.input';
import { BrandMinOrderByAggregateInput } from './brand-min-order-by-aggregate.input';
import { BrandSumOrderByAggregateInput } from './brand-sum-order-by-aggregate.input';

@InputType()
export class BrandOrderByWithAggregationInput {

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
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    languageCode?: keyof typeof SortOrder;

    @Field(() => BrandCountOrderByAggregateInput, {nullable:true})
    _count?: BrandCountOrderByAggregateInput;

    @Field(() => BrandAvgOrderByAggregateInput, {nullable:true})
    _avg?: BrandAvgOrderByAggregateInput;

    @Field(() => BrandMaxOrderByAggregateInput, {nullable:true})
    _max?: BrandMaxOrderByAggregateInput;

    @Field(() => BrandMinOrderByAggregateInput, {nullable:true})
    _min?: BrandMinOrderByAggregateInput;

    @Field(() => BrandSumOrderByAggregateInput, {nullable:true})
    _sum?: BrandSumOrderByAggregateInput;
}
