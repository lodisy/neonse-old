import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@ArgsType()
export class FindUniquePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    where!: PaymentWhereUniqueInput;
}
