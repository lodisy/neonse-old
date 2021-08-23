import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutAddressInput } from './order-update-without-address.input';
import { OrderCreateWithoutAddressInput } from './order-create-without-address.input';

@InputType()
export class OrderUpsertWithoutAddressInput {

    @Field(() => OrderUpdateWithoutAddressInput, {nullable:false})
    update!: OrderUpdateWithoutAddressInput;

    @Field(() => OrderCreateWithoutAddressInput, {nullable:false})
    create!: OrderCreateWithoutAddressInput;
}
