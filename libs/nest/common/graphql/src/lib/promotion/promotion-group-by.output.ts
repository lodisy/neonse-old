import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionCountAggregate } from './promotion-count-aggregate.output';
import { PromotionAvgAggregate } from './promotion-avg-aggregate.output';
import { PromotionSumAggregate } from './promotion-sum-aggregate.output';
import { PromotionMinAggregate } from './promotion-min-aggregate.output';
import { PromotionMaxAggregate } from './promotion-max-aggregate.output';

@ObjectType()
export class PromotionGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:true})
    startAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endAt?: Date | string;

    @Field(() => String, {nullable:false})
    couponCode!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    enabled!: boolean;

    @Field(() => Int, {nullable:true})
    perCustomerUsageLimit?: number;

    @Field(() => String, {nullable:false})
    promotionListId!: string;

    @Field(() => PromotionCountAggregate, {nullable:true})
    _count?: PromotionCountAggregate;

    @Field(() => PromotionAvgAggregate, {nullable:true})
    _avg?: PromotionAvgAggregate;

    @Field(() => PromotionSumAggregate, {nullable:true})
    _sum?: PromotionSumAggregate;

    @Field(() => PromotionMinAggregate, {nullable:true})
    _min?: PromotionMinAggregate;

    @Field(() => PromotionMaxAggregate, {nullable:true})
    _max?: PromotionMaxAggregate;
}
