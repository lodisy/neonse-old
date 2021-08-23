import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithoutOrderInput } from './order-item-update-without-order.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    data!: OrderItemUpdateWithoutOrderInput;
}
