import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutPaymentInput } from './order-create-without-payment.input';
import { OrderCreateOrConnectWithoutPaymentInput } from './order-create-or-connect-without-payment.input';
import { OrderUpsertWithoutPaymentInput } from './order-upsert-without-payment.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutPaymentInput } from './order-update-without-payment.input';

@InputType()
export class OrderUpdateOneRequiredWithoutPaymentInput {

    @Field(() => OrderCreateWithoutPaymentInput, {nullable:true})
    create?: OrderCreateWithoutPaymentInput;

    @Field(() => OrderCreateOrConnectWithoutPaymentInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput;

    @Field(() => OrderUpsertWithoutPaymentInput, {nullable:true})
    upsert?: OrderUpsertWithoutPaymentInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutPaymentInput, {nullable:true})
    update?: OrderUpdateWithoutPaymentInput;
}
