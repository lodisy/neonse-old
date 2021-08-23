import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemCreateInput } from './order-item-create.input';
import { OrderItemUpdateInput } from './order-item-update.input';

@ArgsType()
export class UpsertOneOrderItemArgs {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemCreateInput, {nullable:false})
    create!: OrderItemCreateInput;

    @Field(() => OrderItemUpdateInput, {nullable:false})
    update!: OrderItemUpdateInput;
}
