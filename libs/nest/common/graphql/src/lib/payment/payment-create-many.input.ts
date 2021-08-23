import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethod } from '../prisma/payment-method.enum';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';

@InputType()
export class PaymentCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PaymentMethod, {nullable:false})
    method!: keyof typeof PaymentMethod;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    transactionId!: string;

    @Field(() => String, {nullable:false})
    errorMessage!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    metadata?: any;

    @Field(() => String, {nullable:false})
    orderId!: string;
}
