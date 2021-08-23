import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithoutImageInput } from './order-item-update-without-image.input';
import { OrderItemCreateWithoutImageInput } from './order-item-create-without-image.input';

@InputType()
export class OrderItemUpsertWithWhereUniqueWithoutImageInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemUpdateWithoutImageInput, {nullable:false})
    update!: OrderItemUpdateWithoutImageInput;

    @Field(() => OrderItemCreateWithoutImageInput, {nullable:false})
    create!: OrderItemCreateWithoutImageInput;
}
