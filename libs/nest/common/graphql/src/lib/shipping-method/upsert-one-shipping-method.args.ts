import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';
import { ShippingMethodCreateInput } from './shipping-method-create.input';
import { ShippingMethodUpdateInput } from './shipping-method-update.input';

@ArgsType()
export class UpsertOneShippingMethodArgs {

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:false})
    where!: ShippingMethodWhereUniqueInput;

    @Field(() => ShippingMethodCreateInput, {nullable:false})
    create!: ShippingMethodCreateInput;

    @Field(() => ShippingMethodUpdateInput, {nullable:false})
    update!: ShippingMethodUpdateInput;
}
