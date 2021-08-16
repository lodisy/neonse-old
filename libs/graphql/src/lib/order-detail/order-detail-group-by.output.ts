import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderDetailCountAggregate } from './order-detail-count-aggregate.output';
import { OrderDetailMinAggregate } from './order-detail-min-aggregate.output';
import { OrderDetailMaxAggregate } from './order-detail-max-aggregate.output';

@ObjectType()
export class OrderDetailGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => OrderDetailCountAggregate, {nullable:true})
    _count?: OrderDetailCountAggregate;

    @Field(() => OrderDetailMinAggregate, {nullable:true})
    _min?: OrderDetailMinAggregate;

    @Field(() => OrderDetailMaxAggregate, {nullable:true})
    _max?: OrderDetailMaxAggregate;
}
