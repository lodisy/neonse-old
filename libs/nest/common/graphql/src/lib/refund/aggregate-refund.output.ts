import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RefundCountAggregate } from './refund-count-aggregate.output';
import { RefundMinAggregate } from './refund-min-aggregate.output';
import { RefundMaxAggregate } from './refund-max-aggregate.output';

@ObjectType()
export class AggregateRefund {

    @Field(() => RefundCountAggregate, {nullable:true})
    _count?: RefundCountAggregate;

    @Field(() => RefundCountAggregate, {nullable:true})
    count?: RefundCountAggregate;

    @Field(() => RefundMinAggregate, {nullable:true})
    _min?: RefundMinAggregate;

    @Field(() => RefundMinAggregate, {nullable:true})
    min?: RefundMinAggregate;

    @Field(() => RefundMaxAggregate, {nullable:true})
    _max?: RefundMaxAggregate;

    @Field(() => RefundMaxAggregate, {nullable:true})
    max?: RefundMaxAggregate;
}
