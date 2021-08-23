import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';
import { PaymentCreateOrConnectWithoutOrderInput } from './payment-create-or-connect-without-order.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@InputType()
export class PaymentUncheckedCreateNestedOneWithoutOrderInput {

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:true})
    create?: PaymentCreateWithoutOrderInput;

    @Field(() => PaymentCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    connect?: PaymentWhereUniqueInput;
}
