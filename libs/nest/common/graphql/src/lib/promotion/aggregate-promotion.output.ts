import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromotionCountAggregate } from './promotion-count-aggregate.output';
import { PromotionAvgAggregate } from './promotion-avg-aggregate.output';
import { PromotionSumAggregate } from './promotion-sum-aggregate.output';
import { PromotionMinAggregate } from './promotion-min-aggregate.output';
import { PromotionMaxAggregate } from './promotion-max-aggregate.output';

@ObjectType()
export class AggregatePromotion {

    @Field(() => PromotionCountAggregate, {nullable:true})
    _count?: PromotionCountAggregate;

    @Field(() => PromotionCountAggregate, {nullable:true})
    count?: PromotionCountAggregate;

    @Field(() => PromotionAvgAggregate, {nullable:true})
    _avg?: PromotionAvgAggregate;

    @Field(() => PromotionAvgAggregate, {nullable:true})
    avg?: PromotionAvgAggregate;

    @Field(() => PromotionSumAggregate, {nullable:true})
    _sum?: PromotionSumAggregate;

    @Field(() => PromotionSumAggregate, {nullable:true})
    sum?: PromotionSumAggregate;

    @Field(() => PromotionMinAggregate, {nullable:true})
    _min?: PromotionMinAggregate;

    @Field(() => PromotionMinAggregate, {nullable:true})
    min?: PromotionMinAggregate;

    @Field(() => PromotionMaxAggregate, {nullable:true})
    _max?: PromotionMaxAggregate;

    @Field(() => PromotionMaxAggregate, {nullable:true})
    max?: PromotionMaxAggregate;
}
