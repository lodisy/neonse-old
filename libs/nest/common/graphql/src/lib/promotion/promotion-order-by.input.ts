import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PromotionOrderByInput {

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
}
