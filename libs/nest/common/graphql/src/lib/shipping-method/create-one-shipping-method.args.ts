import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodCreateInput } from './shipping-method-create.input';

@ArgsType()
export class CreateOneShippingMethodArgs {

    @Field(() => ShippingMethodCreateInput, {nullable:false})
    data!: ShippingMethodCreateInput;
}
