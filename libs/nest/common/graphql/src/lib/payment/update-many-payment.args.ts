import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentUpdateManyMutationInput } from './payment-update-many-mutation.input';
import { PaymentWhereInput } from './payment-where.input';

@ArgsType()
export class UpdateManyPaymentArgs {

    @Field(() => PaymentUpdateManyMutationInput, {nullable:false})
    data!: PaymentUpdateManyMutationInput;

    @Field(() => PaymentWhereInput, {nullable:true})
    where?: PaymentWhereInput;
}
