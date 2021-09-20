import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PromotionListCountOrderByAggregateInput } from './promotion-list-count-order-by-aggregate.input';
import { PromotionListAvgOrderByAggregateInput } from './promotion-list-avg-order-by-aggregate.input';
import { PromotionListMaxOrderByAggregateInput } from './promotion-list-max-order-by-aggregate.input';
import { PromotionListMinOrderByAggregateInput } from './promotion-list-min-order-by-aggregate.input';
import { PromotionListSumOrderByAggregateInput } from './promotion-list-sum-order-by-aggregate.input';

@InputType()
export class PromotionListOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => PromotionListCountOrderByAggregateInput, {nullable:true})
    _count?: PromotionListCountOrderByAggregateInput;

    @Field(() => PromotionListAvgOrderByAggregateInput, {nullable:true})
    _avg?: PromotionListAvgOrderByAggregateInput;

    @Field(() => PromotionListMaxOrderByAggregateInput, {nullable:true})
    _max?: PromotionListMaxOrderByAggregateInput;

    @Field(() => PromotionListMinOrderByAggregateInput, {nullable:true})
    _min?: PromotionListMinOrderByAggregateInput;

    @Field(() => PromotionListSumOrderByAggregateInput, {nullable:true})
    _sum?: PromotionListSumOrderByAggregateInput;
}
