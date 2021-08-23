import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereInput } from './order-item-where.input';

@ArgsType()
export class DeleteManyOrderItemArgs {

    @Field(() => OrderItemWhereInput, {nullable:true})
    where?: OrderItemWhereInput;
}
