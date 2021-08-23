import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemUpdateManyMutationInput } from './order-item-update-many-mutation.input';
import { OrderItemWhereInput } from './order-item-where.input';

@ArgsType()
export class UpdateManyOrderItemArgs {

    @Field(() => OrderItemUpdateManyMutationInput, {nullable:false})
    data!: OrderItemUpdateManyMutationInput;

    @Field(() => OrderItemWhereInput, {nullable:true})
    where?: OrderItemWhereInput;
}
