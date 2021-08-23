import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { PaymentCreateInput } from './payment-create.input';
import { PaymentUpdateInput } from './payment-update.input';

@ArgsType()
export class UpsertOnePaymentArgs {

    @Field(() => PaymentWhereUniqueInput, {nullable:false})
    where!: PaymentWhereUniqueInput;

    @Field(() => PaymentCreateInput, {nullable:false})
    create!: PaymentCreateInput;

    @Field(() => PaymentUpdateInput, {nullable:false})
    update!: PaymentUpdateInput;
}
