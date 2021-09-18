import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneUpdateInput } from './shipping-zone-update.input';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';

@ArgsType()
export class UpdateOneShippingZoneArgs {

    @Field(() => ShippingZoneUpdateInput, {nullable:false})
    data!: ShippingZoneUpdateInput;

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:false})
    where!: ShippingZoneWhereUniqueInput;
}
