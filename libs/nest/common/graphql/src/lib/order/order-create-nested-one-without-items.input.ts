import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';
import { OrderCreateOrConnectWithoutItemsInput } from './order-create-or-connect-without-items.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutItemsInput {

    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    create?: OrderCreateWithoutItemsInput;

    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
