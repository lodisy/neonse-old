import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneUpdateManyMutationInput } from './shipping-zone-update-many-mutation.input';
import { ShippingZoneWhereInput } from './shipping-zone-where.input';

@ArgsType()
export class UpdateManyShippingZoneArgs {

    @Field(() => ShippingZoneUpdateManyMutationInput, {nullable:false})
    data!: ShippingZoneUpdateManyMutationInput;

    @Field(() => ShippingZoneWhereInput, {nullable:true})
    where?: ShippingZoneWhereInput;
}
