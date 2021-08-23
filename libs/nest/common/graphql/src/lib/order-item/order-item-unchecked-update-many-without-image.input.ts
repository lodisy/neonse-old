import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutImageInput } from './order-item-create-without-image.input';
import { OrderItemCreateOrConnectWithoutImageInput } from './order-item-create-or-connect-without-image.input';
import { OrderItemUpsertWithWhereUniqueWithoutImageInput } from './order-item-upsert-with-where-unique-without-image.input';
import { OrderItemCreateManyImageInputEnvelope } from './order-item-create-many-image-input-envelope.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutImageInput } from './order-item-update-with-where-unique-without-image.input';
import { OrderItemUpdateManyWithWhereWithoutImageInput } from './order-item-update-many-with-where-without-image.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUncheckedUpdateManyWithoutImageInput {

    @Field(() => [OrderItemCreateWithoutImageInput], {nullable:true})
    create?: Array<OrderItemCreateWithoutImageInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutImageInput], {nullable:true})
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutImageInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutImageInput], {nullable:true})
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutImageInput>;

    @Field(() => OrderItemCreateManyImageInputEnvelope, {nullable:true})
    createMany?: OrderItemCreateManyImageInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    connect?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    set?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    disconnect?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    delete?: Array<OrderItemWhereUniqueInput>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutImageInput], {nullable:true})
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutImageInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutImageInput], {nullable:true})
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutImageInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
