import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CardCountOrderByAggregateInput } from './card-count-order-by-aggregate.input';
import { CardAvgOrderByAggregateInput } from './card-avg-order-by-aggregate.input';
import { CardMaxOrderByAggregateInput } from './card-max-order-by-aggregate.input';
import { CardMinOrderByAggregateInput } from './card-min-order-by-aggregate.input';
import { CardSumOrderByAggregateInput } from './card-sum-order-by-aggregate.input';

@InputType()
export class CardOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expiration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bank?: keyof typeof SortOrder;

    @Field(() => CardCountOrderByAggregateInput, {nullable:true})
    _count?: CardCountOrderByAggregateInput;

    @Field(() => CardAvgOrderByAggregateInput, {nullable:true})
    _avg?: CardAvgOrderByAggregateInput;

    @Field(() => CardMaxOrderByAggregateInput, {nullable:true})
    _max?: CardMaxOrderByAggregateInput;

    @Field(() => CardMinOrderByAggregateInput, {nullable:true})
    _min?: CardMinOrderByAggregateInput;

    @Field(() => CardSumOrderByAggregateInput, {nullable:true})
    _sum?: CardSumOrderByAggregateInput;
}
