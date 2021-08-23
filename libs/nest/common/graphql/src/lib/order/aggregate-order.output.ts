import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class AggregateOrder {

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderCountAggregate, {nullable:true})
    count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    max?: OrderMaxAggregate;
}
