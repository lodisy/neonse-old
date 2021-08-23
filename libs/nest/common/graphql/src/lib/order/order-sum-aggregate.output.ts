import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OrderSumAggregate {

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
}
