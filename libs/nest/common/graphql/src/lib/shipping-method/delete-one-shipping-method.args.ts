import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';

@ArgsType()
export class DeleteOneShippingMethodArgs {

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:false})
    where!: ShippingMethodWhereUniqueInput;
}
