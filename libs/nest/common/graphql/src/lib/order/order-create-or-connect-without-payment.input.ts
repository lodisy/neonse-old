import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';

@InputType()
export class OrderCreateOrConnectWithoutPaymentInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:false})
    create!: OrderCreateWithoutPaymentInput;
}
