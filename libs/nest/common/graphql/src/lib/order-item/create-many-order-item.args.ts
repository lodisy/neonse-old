import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderItemCreateManyInput } from './order-item-create-many.input';

@ArgsType()
export class CreateManyOrderItemArgs {

    @Field(() => [OrderItemCreateManyInput], {nullable:false})
    data!: Array<OrderItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
