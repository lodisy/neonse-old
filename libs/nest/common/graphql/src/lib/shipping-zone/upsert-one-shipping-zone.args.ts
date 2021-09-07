import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';
import { ShippingZoneCreateInput } from './shipping-zone-create.input';
import { ShippingZoneUpdateInput } from './shipping-zone-update.input';

@ArgsType()
export class UpsertOneShippingZoneArgs {

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:false})
    where!: ShippingZoneWhereUniqueInput;

    @Field(() => ShippingZoneCreateInput, {nullable:false})
    create!: ShippingZoneCreateInput;

    @Field(() => ShippingZoneUpdateInput, {nullable:false})
    update!: ShippingZoneUpdateInput;
}
