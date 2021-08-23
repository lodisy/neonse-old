import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';
import { OrderCreateOrConnectWithoutPaymentInput } from './order-create-or-connect-without-payment.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutPaymentInput {

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:true})
    create?: OrderCreateWithoutPaymentInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
