import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneCreateInput } from './shipping-zone-create.input';

@ArgsType()
export class CreateOneShippingZoneArgs {

    @Field(() => ShippingZoneCreateInput, {nullable:false})
    data!: ShippingZoneCreateInput;
}
