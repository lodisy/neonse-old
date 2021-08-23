import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregate } from './order-count-aggregate.output';
import { OrderAvgAggregate } from './order-avg-aggregate.output';
import { OrderSumAggregate } from './order-sum-aggregate.output';
import { OrderMinAggregate } from './order-min-aggregate.output';
import { OrderMaxAggregate } from './order-max-aggregate.output';

@ObjectType()
export class OrderGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    placedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:false})
    pending!: boolean;

    @Field(() => OrderStatus, {nullable:false})
    status!: keyof typeof OrderStatus;

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

    @Field(() => String, {nullable:true})
    tracking?: string;

    @Field(() => OrderCountAggregate, {nullable:true})
    _count?: OrderCountAggregate;

    @Field(() => OrderAvgAggregate, {nullable:true})
    _avg?: OrderAvgAggregate;

    @Field(() => OrderSumAggregate, {nullable:true})
    _sum?: OrderSumAggregate;

    @Field(() => OrderMinAggregate, {nullable:true})
    _min?: OrderMinAggregate;

    @Field(() => OrderMaxAggregate, {nullable:true})
    _max?: OrderMaxAggregate;
}
