import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemCreateWithoutImageInput } from './order-item-create-without-image.input';

@InputType()
export class OrderItemCreateOrConnectWithoutImageInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemCreateWithoutImageInput, {nullable:false})
    create!: OrderItemCreateWithoutImageInput;
}
