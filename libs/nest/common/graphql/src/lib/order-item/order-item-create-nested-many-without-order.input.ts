import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';
import { OrderItemCreateOrConnectWithoutOrderInput } from './order-item-create-or-connect-without-order.input';
import { OrderItemCreateManyOrderInputEnvelope } from './order-item-create-many-order-input-envelope.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemCreateNestedManyWithoutOrderInput {

    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    create?: Array<OrderItemCreateWithoutOrderInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;

    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    createMany?: OrderItemCreateManyOrderInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    connect?: Array<OrderItemWhereUniqueInput>;
}
