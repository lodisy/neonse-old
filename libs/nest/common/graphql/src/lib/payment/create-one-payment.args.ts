import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentCreateInput } from './payment-create.input';

@ArgsType()
export class CreateOnePaymentArgs {

    @Field(() => PaymentCreateInput, {nullable:false})
    data!: PaymentCreateInput;
}
