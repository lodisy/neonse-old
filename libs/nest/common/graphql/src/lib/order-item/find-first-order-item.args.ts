import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';
import { OrderItemOrderByWithRelationInput } from './order-item-order-by-with-relation.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderItemScalarFieldEnum } from './order-item-scalar-field.enum';

@ArgsType()
export class FindFirstOrderItemArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    where?: OrderItemWhereInput;

    @Field(() => [OrderItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderItemOrderByWithRelationInput>;

    @Field(() => OrderItemWhereUniqueInput, {nullable:true})
    cursor?: OrderItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [OrderItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof OrderItemScalarFieldEnum>;
}
