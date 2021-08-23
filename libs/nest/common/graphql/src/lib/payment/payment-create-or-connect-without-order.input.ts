import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';

@InputType()
export class PaymentCreateOrConnectWithoutOrderInput {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    where!: PaymentWhereUniqueInput;

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:false})
    create!: PaymentCreateWithoutOrderInput;
}
