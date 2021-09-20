import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';
import { ShippingZoneOrderByWithAggregationInput } from './shipping-zone-order-by-with-aggregation.input';
import { ShippingZoneScalarFieldEnum } from './shipping-zone-scalar-field.enum';
import { ShippingZoneScalarWhereWithAggregatesInput } from './shipping-zone-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShippingZoneCountAggregateInput } from './shipping-zone-count-aggregate.input';
import { ShippingZoneMinAggregateInput } from './shipping-zone-min-aggregate.input';
import { ShippingZoneMaxAggregateInput } from './shipping-zone-max-aggregate.input';

@ArgsType()
export class ShippingZoneGroupByArgs {

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    where?: ShippingZoneWhereInput;

    @Field(() => [ShippingZoneOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ShippingZoneOrderByWithAggregationInput>;

    @Field(() => [ShippingZoneScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShippingZoneScalarFieldEnum>;

    @Field(() => ShippingZoneScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShippingZoneScalarWhereWithAggregatesInput;

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
