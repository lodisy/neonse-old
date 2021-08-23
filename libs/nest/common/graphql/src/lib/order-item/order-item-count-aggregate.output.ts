import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    sku!: number;

    @Field(() => Int, {nullable:false})
    brands!: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    color!: number;

    @Field(() => Int, {nullable:false})
    style!: number;

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

    @Field(() => Int, {nullable:false})
    orderId!: number;

    @Field(() => Int, {nullable:false})
    fileId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
