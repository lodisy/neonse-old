import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodUpdateInput } from './shipping-method-update.input';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';

@ArgsType()
export class UpdateOneShippingMethodArgs {

    @Field(() => ShippingMethodUpdateInput, {nullable:false})
    data!: ShippingMethodUpdateInput;

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:false})
    where!: ShippingMethodWhereUniqueInput;
}
