import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@ArgsType()
export class DeleteOnePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    where!: PaymentWhereUniqueInput;
}
