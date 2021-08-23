import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemUpdateInput } from './order-item-update.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@ArgsType()
export class UpdateOneOrderItemArgs {

    @Field(() => OrderItemUpdateInput, {nullable:false})
    data!: OrderItemUpdateInput;

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;
}
