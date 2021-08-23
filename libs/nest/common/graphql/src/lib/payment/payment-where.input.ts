import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumPaymentMethodFilter } from '../prisma/enum-payment-method-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { OrderRelationFilter } from '../order/order-relation-filter.input';

@InputType()
export class PaymentWhereInput {

    @Field(() => [PaymentWhereInput], {nullable:true})
    AND?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    OR?: Array<PaymentWhereInput>;

    @Field(() => [PaymentWhereInput], {nullable:true})
    NOT?: Array<PaymentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumPaymentMethodFilter, {nullable:true})
    method?: EnumPaymentMethodFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    transactionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    errorMessage?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    metadata?: JsonNullableFilter;

    @Field(() => OrderRelationFilter, {nullable:true})
    order?: OrderRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    orderId?: StringFilter;
}
