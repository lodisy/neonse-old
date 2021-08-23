import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemCreateInput } from './order-item-create.input';

@ArgsType()
export class CreateOneOrderItemArgs {

    @Field(() => OrderItemCreateInput, {nullable:false})
    data!: OrderItemCreateInput;
}
