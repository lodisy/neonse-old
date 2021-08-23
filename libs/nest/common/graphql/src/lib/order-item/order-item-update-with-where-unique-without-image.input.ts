import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithoutImageInput } from './order-item-update-without-image.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutImageInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    where!: OrderItemWhereUniqueInput;

    @Field(() => OrderItemUpdateWithoutImageInput, {nullable:false})
    data!: OrderItemUpdateWithoutImageInput;
}
