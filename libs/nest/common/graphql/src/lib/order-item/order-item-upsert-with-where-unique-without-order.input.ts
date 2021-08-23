import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithoutOrderInput } from './order-item-update-without-order.input';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutOrderInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    update!: OrderItemUpdateWithoutOrderInput;

    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    create!: OrderItemCreateWithoutOrderInput;
}
