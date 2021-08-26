import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PaymentMethod } from '../prisma/payment-method.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { Order } from '../order/order.model';

/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
/** 支付 */
@ObjectType({description:'支付'})
export class Payment {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => PaymentMethod, {nullable:false})
    method!: keyof typeof PaymentMethod;
    @Field(() => String, {nullable:false})
    status!: string;
    @Field(() => String, {nullable:false})
    transactionId!: string;
    @Field(() => String, {nullable:false})
    errorMessage!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    metadata!: any | null;
    @Field(() => Order, {nullable:false})
    order?: Order;
    @Field(() => String, {nullable:false})
    orderId!: string;
}
