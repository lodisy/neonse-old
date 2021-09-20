import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PromotionCountOrderByAggregateInput } from './promotion-count-order-by-aggregate.input';
import { PromotionAvgOrderByAggregateInput } from './promotion-avg-order-by-aggregate.input';
import { PromotionMaxOrderByAggregateInput } from './promotion-max-order-by-aggregate.input';
import { PromotionMinOrderByAggregateInput } from './promotion-min-order-by-aggregate.input';
import { PromotionSumOrderByAggregateInput } from './promotion-sum-order-by-aggregate.input';

@InputType()
export class PromotionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    couponCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    perCustomerUsageLimit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotionListId?: keyof typeof SortOrder;

    @Field(() => PromotionCountOrderByAggregateInput, {nullable:true})
    _count?: PromotionCountOrderByAggregateInput;

    @Field(() => PromotionAvgOrderByAggregateInput, {nullable:true})
    _avg?: PromotionAvgOrderByAggregateInput;

    @Field(() => PromotionMaxOrderByAggregateInput, {nullable:true})
    _max?: PromotionMaxOrderByAggregateInput;

    @Field(() => PromotionMinOrderByAggregateInput, {nullable:true})
    _min?: PromotionMinOrderByAggregateInput;

    @Field(() => PromotionSumOrderByAggregateInput, {nullable:true})
    _sum?: PromotionSumOrderByAggregateInput;
}
