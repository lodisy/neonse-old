import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PaymentWhereInput } from './payment-where.input';
import { PaymentOrderByWithRelationInput } from './payment-order-by-with-relation.input';
import { PaymentWhereUniqueInput } from './payment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PaymentCountAggregateInput } from './payment-count-aggregate.input';
import { PaymentMinAggregateInput } from './payment-min-aggregate.input';
import { PaymentMaxAggregateInput } from './payment-max-aggregate.input';

@ArgsType()
export class PaymentAggregateArgs {

    @Field(() => PaymentWhereInput, {nullable:true})
    where?: PaymentWhereInput;

    @Field(() => [PaymentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PaymentOrderByWithRelationInput>;

    @Field(() => PaymentWhereUniqueInput, {nullable:true})
    cursor?: PaymentWhereUniqueInput;

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
