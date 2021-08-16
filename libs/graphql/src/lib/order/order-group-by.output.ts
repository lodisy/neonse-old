import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
