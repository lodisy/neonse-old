import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressUpdateManyMutationInput } from './order-address-update-many-mutation.input';
import { OrderAddressWhereInput } from './order-address-where.input';

@ArgsType()
export class UpdateManyOrderAddressArgs {

    @Field(() => OrderAddressUpdateManyMutationInput, {nullable:false})
    data!: OrderAddressUpdateManyMutationInput;

    @Field(() => OrderAddressWhereInput, {nullable:true})
    where?: OrderAddressWhereInput;
}
