import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { PaymentUpsertWithoutOrderInput } from './payment-upsert-without-order.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentUpdateWithoutOrderInput } from './payment-update-without-order.input';

@InputType()
export class PaymentUpdateOneWithoutOrderInput {

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:true})
    create?: PaymentCreateWithoutOrderInput;

    @Field(() => PaymentCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentUpsertWithoutOrderInput, {nullable:true})
    upsert?: PaymentUpsertWithoutOrderInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    connect?: PaymentWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => PaymentUpdateWithoutOrderInput, {nullable:true})
    update?: PaymentUpdateWithoutOrderInput;
}
