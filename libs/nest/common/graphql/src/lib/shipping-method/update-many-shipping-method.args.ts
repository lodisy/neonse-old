import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodUpdateManyMutationInput } from './shipping-method-update-many-mutation.input';
import { ShippingMethodWhereInput } from './shipping-method-where.input';

@ArgsType()
export class UpdateManyShippingMethodArgs {

    @Field(() => ShippingMethodUpdateManyMutationInput, {nullable:false})
    data!: ShippingMethodUpdateManyMutationInput;

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    where?: ShippingMethodWhereInput;
}
