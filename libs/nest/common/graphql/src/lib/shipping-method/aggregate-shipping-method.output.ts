import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingMethodCountAggregate } from './shipping-method-count-aggregate.output';
import { ShippingMethodMinAggregate } from './shipping-method-min-aggregate.output';
import { ShippingMethodMaxAggregate } from './shipping-method-max-aggregate.output';

@ObjectType()
export class AggregateShippingMethod {

    @Field(() => ShippingMethodCountAggregate, {nullable:true})
    _count?: ShippingMethodCountAggregate;

    @Field(() => ShippingMethodMinAggregate, {nullable:true})
    _min?: ShippingMethodMinAggregate;

    @Field(() => ShippingMethodMaxAggregate, {nullable:true})
    _max?: ShippingMethodMaxAggregate;
}
