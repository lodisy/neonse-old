import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PaymentMethod } from '../prisma/payment-method.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { PaymentCountAggregate } from './payment-count-aggregate.output';
import { PaymentMinAggregate } from './payment-min-aggregate.output';
import { PaymentMaxAggregate } from './payment-max-aggregate.output';

@ObjectType()
export class PaymentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => PaymentMethod, {nullable:false})
    method!: keyof typeof PaymentMethod;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    transactionId!: string;

    @Field(() => String, {nullable:false})
    errorMessage!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    metadata?: any;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => PaymentCountAggregate, {nullable:true})
    _count?: PaymentCountAggregate;

    @Field(() => PaymentMinAggregate, {nullable:true})
    _min?: PaymentMinAggregate;

    @Field(() => PaymentMaxAggregate, {nullable:true})
    _max?: PaymentMaxAggregate;
}
