import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';
import { OrderItemCreateOrConnectWithoutOrderInput } from './order-item-create-or-connect-without-order.input';
import { OrderItemUpsertWithWhereUniqueWithoutOrderInput } from './order-item-upsert-with-where-unique-without-order.input';
import { OrderItemCreateManyOrderInputEnvelope } from './order-item-create-many-order-input-envelope.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutOrderInput } from './order-item-update-with-where-unique-without-order.input';
import { OrderItemUpdateManyWithWhereWithoutOrderInput } from './order-item-update-many-with-where-without-order.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUncheckedUpdateManyWithoutOrderInput {

    @Field(() => [OrderItemCreateWithoutOrderInput], {nullable:true})
    create?: Array<OrderItemCreateWithoutOrderInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutOrderInput], {nullable:true})
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutOrderInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => OrderItemCreateManyOrderInputEnvelope, {nullable:true})
    createMany?: OrderItemCreateManyOrderInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    connect?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    set?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    delete?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
