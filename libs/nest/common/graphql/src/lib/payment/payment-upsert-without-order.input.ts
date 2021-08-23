import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentUpdateWithoutOrderInput } from './payment-update-without-order.input';
import { PaymentCreateWithoutOrderInput } from './payment-create-without-order.input';

@InputType()
export class PaymentUpsertWithoutOrderInput {

    @Field(() => PaymentUpdateWithoutOrderInput, {nullable:false})
    update!: PaymentUpdateWithoutOrderInput;

    @Field(() => PaymentCreateWithoutOrderInput, {nullable:false})
    create!: PaymentCreateWithoutOrderInput;
}
