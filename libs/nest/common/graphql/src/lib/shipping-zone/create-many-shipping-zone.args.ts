import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingZoneCreateManyInput } from './shipping-zone-create-many.input';

@ArgsType()
export class CreateManyShippingZoneArgs {

    @Field(() => [ShippingZoneCreateManyInput], {nullable:false})
    data!: Array<ShippingZoneCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
