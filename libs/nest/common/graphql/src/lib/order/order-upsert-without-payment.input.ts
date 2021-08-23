import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutPaymentInput } from './order-update-without-payment.input';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';

@InputType()
export class OrderUpsertWithoutPaymentInput {

    @Field(() => OrderUpdateWithoutPaymentInput, {nullable:false})
    update!: OrderUpdateWithoutPaymentInput;

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:false})
    create!: OrderCreateWithoutPaymentInput;
}
