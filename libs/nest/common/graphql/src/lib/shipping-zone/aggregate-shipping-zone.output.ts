import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingZoneCountAggregate } from './shipping-zone-count-aggregate.output';
import { ShippingZoneMinAggregate } from './shipping-zone-min-aggregate.output';
import { ShippingZoneMaxAggregate } from './shipping-zone-max-aggregate.output';

@ObjectType()
export class AggregateShippingZone {

    @Field(() => ShippingZoneCountAggregate, {nullable:true})
    _count?: ShippingZoneCountAggregate;

    @Field(() => ShippingZoneCountAggregate, {nullable:true})
    count?: ShippingZoneCountAggregate;

    @Field(() => ShippingZoneMinAggregate, {nullable:true})
    _min?: ShippingZoneMinAggregate;

    @Field(() => ShippingZoneMinAggregate, {nullable:true})
    min?: ShippingZoneMinAggregate;

    @Field(() => ShippingZoneMaxAggregate, {nullable:true})
    _max?: ShippingZoneMaxAggregate;

    @Field(() => ShippingZoneMaxAggregate, {nullable:true})
    max?: ShippingZoneMaxAggregate;
}
