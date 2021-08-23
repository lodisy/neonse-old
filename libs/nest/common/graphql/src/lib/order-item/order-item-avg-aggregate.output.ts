import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderItemAvgAggregate {

    @Field(() => Float, {nullable:true})
    unitPrice?: number;

    @Field(() => Float, {nullable:true})
    unitPriceWithTax?: number;

    @Field(() => Float, {nullable:true})
    discountedUnitPrice?: number;

    @Field(() => Float, {nullable:true})
    discountedUnitPriceWithTax?: number;

    @Field(() => Float, {nullable:true})
    quantity?: number;
}
