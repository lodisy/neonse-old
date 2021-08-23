import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderAddressUpdateWithoutOrderInput } from './order-address-update-without-order.input';
import { OrderAddressCreateWithoutOrderInput } from './order-address-create-without-order.input';

@InputType()
export class OrderAddressUpsertWithoutOrderInput {

    @Field(() => OrderAddressUpdateWithoutOrderInput, {nullable:false})
    update!: OrderAddressUpdateWithoutOrderInput;

    @Field(() => OrderAddressCreateWithoutOrderInput, {nullable:false})
    create!: OrderAddressCreateWithoutOrderInput;
}
