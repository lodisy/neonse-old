import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';

@InputType()
export class ShippingZoneRelationFilter {

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    is?: ShippingZoneWhereInput;

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    isNot?: ShippingZoneWhereInput;
}
