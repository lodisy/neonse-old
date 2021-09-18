import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereUniqueInput } from './shipping-zone-where-unique.input';

@ArgsType()
export class FindUniqueShippingZoneArgs {

    @Field(() => ShippingZoneWhereUniqueInput, {nullable:false})
    where!: ShippingZoneWhereUniqueInput;
}
