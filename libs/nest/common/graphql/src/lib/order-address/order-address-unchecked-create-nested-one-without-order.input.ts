import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderAddressCreateWithoutOrderInput } from './order-address-create-without-order.input';
import { OrderAddressCreateOrConnectWithoutOrderInput } from './order-address-create-or-connect-without-order.input';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';

@InputType()
export class OrderAddressUncheckedCreateNestedOneWithoutOrderInput {

    @Field(() => OrderAddressCreateWithoutOrderInput, {nullable:true})
    create?: OrderAddressCreateWithoutOrderInput;

    @Field(() => OrderAddressCreateOrConnectWithoutOrderInput, {nullable:true})
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput;

    @Field(() => OrderAddressWhereUniqueInput, {nullable:true})
    connect?: OrderAddressWhereUniqueInput;
}
