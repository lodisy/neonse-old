import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentUpdateInput } from './payment-update.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';

@ArgsType()
export class UpdateOnePaymentArgs {

    @Field(() => PaymentUpdateInput, {nullable:false})
    data!: PaymentUpdateInput;

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    where!: PaymentWhereUniqueInput;
}
