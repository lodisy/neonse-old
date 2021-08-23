import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressCreateInput } from './order-address-create.input';

@ArgsType()
export class CreateOneOrderAddressArgs {

    @Field(() => OrderAddressCreateInput, {nullable:false})
    data!: OrderAddressCreateInput;
}
