import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PromotionListCountAggregate } from './promotion-list-count-aggregate.output';
import { PromotionListAvgAggregate } from './promotion-list-avg-aggregate.output';
import { PromotionListSumAggregate } from './promotion-list-sum-aggregate.output';
import { PromotionListMinAggregate } from './promotion-list-min-aggregate.output';
import { PromotionListMaxAggregate } from './promotion-list-max-aggregate.output';

@ObjectType()
export class AggregatePromotionList {

    @Field(() => PromotionListCountAggregate, {nullable:true})
    _count?: PromotionListCountAggregate;

    @Field(() => PromotionListAvgAggregate, {nullable:true})
    _avg?: PromotionListAvgAggregate;

    @Field(() => PromotionListSumAggregate, {nullable:true})
    _sum?: PromotionListSumAggregate;

    @Field(() => PromotionListMinAggregate, {nullable:true})
    _min?: PromotionListMinAggregate;

    @Field(() => PromotionListMaxAggregate, {nullable:true})
    _max?: PromotionListMaxAggregate;
}
