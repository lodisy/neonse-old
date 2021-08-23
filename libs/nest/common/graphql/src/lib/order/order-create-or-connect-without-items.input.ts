import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';

@InputType()
export class OrderCreateOrConnectWithoutItemsInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutItemsInput, {nullable:false})
    create!: OrderCreateWithoutItemsInput;
}
