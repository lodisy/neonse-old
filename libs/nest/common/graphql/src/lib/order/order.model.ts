import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { OrderAddress } from '../order-address/order-address.model';
import { OrderItem } from '../order-item/order-item.model';
import { Int } from '@nestjs/graphql';
import { Payment } from '../payment/payment.model';

/** 订单 */
@ObjectType({description:'订单'})
export class Order {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    /** 付款时间 */
    @Field(() => Date, {nullable:false,description:'付款时间'})
    placedAt!: Date;

    @Field(() => String, {nullable:false})
    code!: string;

    /** 未付款 */
    @Field(() => Boolean, {nullable:false,defaultValue:true,description:'未付款'})
    pending!: boolean;

    @Field(() => OrderStatus, {nullable:false,defaultValue:'pending'})
    status!: keyof typeof OrderStatus;

    @Field(() => OrderAddress, {nullable:true})
    address?: OrderAddress;

    @Field(() => [OrderItem], {nullable:true})
    items?: Array<OrderItem>;

    @Field(() => Int, {nullable:false})
    totalQuantity!: number;

    @Field(() => Int, {nullable:false})
    subTotal!: number;

    @Field(() => Int, {nullable:false})
    subTotalWithTax!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    totalWithTax!: number;

    @Field(() => Payment, {nullable:true})
    payment?: Payment;

    @Field(() => String, {nullable:true})
    tracking!: string | null;
}
