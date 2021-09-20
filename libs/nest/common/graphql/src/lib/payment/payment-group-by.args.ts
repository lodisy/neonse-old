import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { PaymentOrderByWithAggregationInput } from './payment-order-by-with-aggregation.input';
import { PaymentScalarFieldEnum } from './payment-scalar-field.enum';
import { PaymentScalarWhereWithAggregatesInput } from './payment-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PaymentCountAggregateInput } from './payment-count-aggregate.input';
import { PaymentMinAggregateInput } from './payment-min-aggregate.input';
import { PaymentMaxAggregateInput } from './payment-max-aggregate.input';

@ArgsType()
export class PaymentGroupByArgs {

    @Field(() => PaymentWhereInput, {nullable:true})
    where?: PaymentWhereInput;

    @Field(() => [PaymentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PaymentOrderByWithAggregationInput>;

    @Field(() => [PaymentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PaymentScalarFieldEnum>;

    @Field(() => PaymentScalarWhereWithAggregatesInput, {nullable:true})
    having?: PaymentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PaymentCountAggregateInput, {nullable:true})
    _count?: PaymentCountAggregateInput;

    @Field(() => PaymentMinAggregateInput, {nullable:true})
    _min?: PaymentMinAggregateInput;

    @Field(() => PaymentMaxAggregateInput, {nullable:true})
    _max?: PaymentMaxAggregateInput;
}
