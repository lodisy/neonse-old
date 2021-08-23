import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderAddressCountAggregate } from './order-address-count-aggregate.output';
import { OrderAddressMinAggregate } from './order-address-min-aggregate.output';
import { OrderAddressMaxAggregate } from './order-address-max-aggregate.output';

@ObjectType()
export class AggregateOrderAddress {

    @Field(() => OrderAddressCountAggregate, {nullable:true})
    _count?: OrderAddressCountAggregate;

    @Field(() => OrderAddressCountAggregate, {nullable:true})
    count?: OrderAddressCountAggregate;

    @Field(() => OrderAddressMinAggregate, {nullable:true})
    _min?: OrderAddressMinAggregate;

    @Field(() => OrderAddressMinAggregate, {nullable:true})
    min?: OrderAddressMinAggregate;

    @Field(() => OrderAddressMaxAggregate, {nullable:true})
    _max?: OrderAddressMaxAggregate;

    @Field(() => OrderAddressMaxAggregate, {nullable:true})
    max?: OrderAddressMaxAggregate;
}
