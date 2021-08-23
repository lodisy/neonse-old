import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderUpdateWithoutItemsInput } from './order-update-without-items.input';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';

@InputType()
export class OrderUpsertWithoutItemsInput {

    @Field(() => OrderUpdateWithoutItemsInput, {nullable:false})
    update!: OrderUpdateWithoutItemsInput;

    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    create!: OrderCreateWithoutItemsInput;
}
