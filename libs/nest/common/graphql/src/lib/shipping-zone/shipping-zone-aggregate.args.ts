import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';
import { ShippingZoneOrderByInput } from './shipping-zone-order-by.input';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingZoneCountAggregateInput } from './shipping-zone-count-aggregate.input';
import { ShippingZoneMinAggregateInput } from './shipping-zone-min-aggregate.input';
import { ShippingZoneMaxAggregateInput } from './shipping-zone-max-aggregate.input';

@ArgsType()
export class ShippingZoneAggregateArgs {

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    where?: ShippingZoneWhereInput;

    @Field(() => [ShippingZoneOrderByInput], {nullable:true})
    orderBy?: Array<ShippingZoneOrderByInput>;

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:true})
    cursor?: ShippingZoneWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShippingZoneCountAggregateInput, {nullable:true})
    _count?: ShippingZoneCountAggregateInput;

    @Field(() => ShippingZoneMinAggregateInput, {nullable:true})
    _min?: ShippingZoneMinAggregateInput;

    @Field(() => ShippingZoneMaxAggregateInput, {nullable:true})
    _max?: ShippingZoneMaxAggregateInput;
}
