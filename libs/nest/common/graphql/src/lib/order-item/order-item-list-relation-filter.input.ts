import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';

@InputType()
export class OrderItemListRelationFilter {

    @Field(() => OrderItemWhereInput, {nullable:true})
    every?: OrderItemWhereInput;

    @Field(() => OrderItemWhereInput, {nullable:true})
    some?: OrderItemWhereInput;

    @Field(() => OrderItemWhereInput, {nullable:true})
    none?: OrderItemWhereInput;
}
