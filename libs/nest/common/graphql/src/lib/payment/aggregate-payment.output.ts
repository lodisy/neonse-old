import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentCountAggregate } from './payment-count-aggregate.output';
import { PaymentMinAggregate } from './payment-min-aggregate.output';
import { PaymentMaxAggregate } from './payment-max-aggregate.output';

@ObjectType()
export class AggregatePayment {

    @Field(() => PaymentCountAggregate, {nullable:true})
    _count?: PaymentCountAggregate;

    @Field(() => PaymentCountAggregate, {nullable:true})
    count?: PaymentCountAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    _min?: PaymentMinAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    min?: PaymentMinAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    _max?: PaymentMaxAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    max?: PaymentMaxAggregate;
}
