import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderItemCountAggregate } from './order-item-count-aggregate.output';
import { OrderItemAvgAggregate } from './order-item-avg-aggregate.output';
import { OrderItemSumAggregate } from './order-item-sum-aggregate.output';
import { OrderItemMinAggregate } from './order-item-min-aggregate.output';
import { OrderItemMaxAggregate } from './order-item-max-aggregate.output';

@ObjectType()
export class OrderItemGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => String, {nullable:true})
    size?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    style?: string;

    @Field(() => Int, {nullable:false})
    unitPrice!: number;

    @Field(() => Int, {nullable:false})
    unitPriceWithTax!: number;

    @Field(() => Int, {nullable:false})
    discountedUnitPrice!: number;

    @Field(() => Int, {nullable:false})
    discountedUnitPriceWithTax!: number;

    @Field(() => Int, {nullable:false})
    quantity!: number;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:false})
    fileId!: string;

    @Field(() => OrderItemCountAggregate, {nullable:true})
    _count?: OrderItemCountAggregate;

    @Field(() => OrderItemAvgAggregate, {nullable:true})
    _avg?: OrderItemAvgAggregate;

    @Field(() => OrderItemSumAggregate, {nullable:true})
    _sum?: OrderItemSumAggregate;

    @Field(() => OrderItemMinAggregate, {nullable:true})
    _min?: OrderItemMinAggregate;

    @Field(() => OrderItemMaxAggregate, {nullable:true})
    _max?: OrderItemMaxAggregate;
}
