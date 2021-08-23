import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';
import { OrderAddressCreateWithoutOrderInput } from './order-address-create-without-order.input';

@InputType()
export class OrderAddressCreateOrConnectWithoutOrderInput {

    @Field(() => OrderAddressWhereUniqueInput, {nullable:false})
    where!: OrderAddressWhereUniqueInput;

    @Field(() => OrderAddressCreateWithoutOrderInput, {nullable:false})
    create!: OrderAddressCreateWithoutOrderInput;
}
