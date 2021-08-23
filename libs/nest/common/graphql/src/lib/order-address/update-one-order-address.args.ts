import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressUpdateInput } from './order-address-update.input';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';

@ArgsType()
export class UpdateOneOrderAddressArgs {

    @Field(() => OrderAddressUpdateInput, {nullable:false})
    data!: OrderAddressUpdateInput;

    @Field(() => OrderAddressWhereUniqueInput, {nullable:false})
    where!: OrderAddressWhereUniqueInput;
}
