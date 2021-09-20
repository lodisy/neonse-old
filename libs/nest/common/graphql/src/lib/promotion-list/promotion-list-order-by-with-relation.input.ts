import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PromotionOrderByRelationAggregateInput } from '../promotion/promotion-order-by-relation-aggregate.input';

@InputType()
export class PromotionListOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => PromotionOrderByRelationAggregateInput, {nullable:true})
    items?: PromotionOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;
}
