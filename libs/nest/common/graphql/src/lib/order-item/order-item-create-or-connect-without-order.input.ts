import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';

@InputType()
export class OrderItemCreateOrConnectWithoutOrderInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    create!: OrderItemCreateWithoutOrderInput;
}
