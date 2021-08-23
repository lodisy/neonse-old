import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { PaymentOrderByInput } from './payment-order-by.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentScalarFieldEnum } from './payment-scalar-field.enum';

@ArgsType()
export class FindFirstPaymentArgs {

    @Field(() => PaymentWhereInput, {nullable:true})
    where?: PaymentWhereInput;

    @Field(() => [PaymentOrderByInput], {nullable:true})
    orderBy?: Array<PaymentOrderByInput>;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    cursor?: PaymentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PaymentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}
