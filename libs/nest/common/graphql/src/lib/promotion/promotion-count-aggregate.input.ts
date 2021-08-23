import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    startAt?: true;

    @Field(() => Boolean, {nullable:true})
    endAt?: true;

    @Field(() => Boolean, {nullable:true})
    couponCode?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    enabled?: true;

    @Field(() => Boolean, {nullable:true})
    perCustomerUsageLimit?: true;

    @Field(() => Boolean, {nullable:true})
    promotionListId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
