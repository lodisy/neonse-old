import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutImageInput } from './order-item-create-without-image.input';
import { OrderItemCreateOrConnectWithoutImageInput } from './order-item-create-or-connect-without-image.input';
import { OrderItemCreateManyImageInputEnvelope } from './order-item-create-many-image-input-envelope.input';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemUncheckedCreateNestedManyWithoutImageInput {

    @Field(() => [OrderItemCreateWithoutImageInput], {nullable:true})
    create?: Array<OrderItemCreateWithoutImageInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutImageInput], {nullable:true})
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutImageInput>;

    @Field(() => OrderItemCreateManyImageInputEnvelope, {nullable:true})
    createMany?: OrderItemCreateManyImageInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    connect?: Array<OrderItemWhereUniqueInput>;
}
