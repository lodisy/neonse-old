import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderItemSumAggregate {

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
}
