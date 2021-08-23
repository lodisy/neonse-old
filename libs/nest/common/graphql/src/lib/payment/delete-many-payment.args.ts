import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';

@ArgsType()
export class DeleteManyPaymentArgs {

    @Field(() => PaymentWhereInput, {nullable:true})
    where?: PaymentWhereInput;
}
