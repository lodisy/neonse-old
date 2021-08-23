import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutItemsInput } from './order-create-without-items.input';
import { OrderCreateOrConnectWithoutItemsInput } from './order-create-or-connect-without-items.input';
import { OrderUpsertWithoutItemsInput } from './order-upsert-without-items.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutItemsInput } from './order-update-without-items.input';

@InputType()
export class OrderUpdateOneWithoutItemsInput {

    @Field(() => OrderCreateWithoutItemsInput, {nullable:true})
    create?: OrderCreateWithoutItemsInput;

    @Field(() => OrderCreateOrConnectWithoutItemsInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput;

    @Field(() => OrderUpsertWithoutItemsInput, {nullable:true})
    upsert?: OrderUpsertWithoutItemsInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderUpdateWithoutItemsInput, {nullable:true})
    update?: OrderUpdateWithoutItemsInput;
}
