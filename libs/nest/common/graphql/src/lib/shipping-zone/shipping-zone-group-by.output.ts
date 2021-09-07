import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ShippingZoneCountAggregate } from './shipping-zone-count-aggregate.output';
import { ShippingZoneMinAggregate } from './shipping-zone-min-aggregate.output';
import { ShippingZoneMaxAggregate } from './shipping-zone-max-aggregate.output';

@ObjectType()
export class ShippingZoneGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ShippingZoneCountAggregate, {nullable:true})
    _count?: ShippingZoneCountAggregate;

    @Field(() => ShippingZoneMinAggregate, {nullable:true})
    _min?: ShippingZoneMinAggregate;

    @Field(() => ShippingZoneMaxAggregate, {nullable:true})
    _max?: ShippingZoneMaxAggregate;
}
