import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderAddressCreateWithoutOrderInput } from './order-address-create-without-order.input';
import { OrderAddressCreateOrConnectWithoutOrderInput } from './order-address-create-or-connect-without-order.input';
import { OrderAddressUpsertWithoutOrderInput } from './order-address-upsert-without-order.input';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';
import { OrderAddressUpdateWithoutOrderInput } from './order-address-update-without-order.input';

@InputType()
export class OrderAddressUpdateOneWithoutOrderInput {

    @Field(() => OrderAddressCreateWithoutOrderInput, {nullable:true})
    create?: OrderAddressCreateWithoutOrderInput;

    @Field(() => OrderAddressCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput;

    @Field(() => OrderAddressUpsertWithoutOrderInput, {nullable:true})
    upsert?: OrderAddressUpsertWithoutOrderInput;

    @Field(() => OrderAddressWhereUniqueInput, {nullable:true})
    connect?: OrderAddressWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => OrderAddressUpdateWithoutOrderInput, {nullable:true})
    update?: OrderAddressUpdateWithoutOrderInput;
}
