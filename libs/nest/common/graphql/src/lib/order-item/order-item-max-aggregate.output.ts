import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    sku?: string;

    @Field(() => String, {nullable:true})
    brands?: string;

    @Field(() => String, {nullable:true})
    size?: string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    style?: string;

    @Field(() => Int, {nullable:true})
    unitPrice?: number;

    @Field(() => Int, {nullable:true})
    unitPriceWithTax?: number;

    @Field(() => Int, {nullable:true})
    discountedUnitPrice?: number;

    @Field(() => Int, {nullable:true})
    discountedUnitPriceWithTax?: number;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => String, {nullable:true})
    orderId?: string;

    @Field(() => String, {nullable:true})
    fileId?: string;
}
