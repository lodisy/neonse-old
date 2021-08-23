import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutAddressInput } from './order-create-without-address.input';
import { OrderCreateOrConnectWithoutAddressInput } from './order-create-or-connect-without-address.input';
import { OrderUpsertWithoutAddressInput } from './order-upsert-without-address.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutAddressInput } from './order-update-without-address.input';

@InputType()
export class OrderUpdateOneRequiredWithoutAddressInput {

    @Field(() => OrderCreateWithoutAddressInput, {nullable:true})
    create?: OrderCreateWithoutAddressInput;

    @Field(() => OrderCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput;

    @Field(() => OrderUpsertWithoutAddressInput, {nullable:true})
    upsert?: OrderUpsertWithoutAddressInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutAddressInput, {nullable:true})
    update?: OrderUpdateWithoutAddressInput;
}
