import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';

@ArgsType()
export class DeleteManyShippingZoneArgs {

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    where?: ShippingZoneWhereInput;
}
