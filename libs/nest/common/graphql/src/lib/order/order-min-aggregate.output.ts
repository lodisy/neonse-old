import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    placedAt?: Date | string;

    @Field(() => String, {nullable:true})
    code?: string;

    @Field(() => Boolean, {nullable:true})
    pending?: boolean;

    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:true})
    totalQuantity?: number;

    @Field(() => Int, {nullable:true})
    subTotal?: number;

    @Field(() => Int, {nullable:true})
    subTotalWithTax?: number;

    @Field(() => Int, {nullable:true})
    total?: number;

    @Field(() => Int, {nullable:true})
    totalWithTax?: number;

    @Field(() => String, {nullable:true})
    tracking?: string;
}
