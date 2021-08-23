import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OrderAvgAggregate {

    @Field(() => Float, {nullable:true})
    totalQuantity?: number;

    @Field(() => Float, {nullable:true})
    subTotal?: number;

    @Field(() => Float, {nullable:true})
    subTotalWithTax?: number;

    @Field(() => Float, {nullable:true})
    total?: number;

    @Field(() => Float, {nullable:true})
    totalWithTax?: number;
}
