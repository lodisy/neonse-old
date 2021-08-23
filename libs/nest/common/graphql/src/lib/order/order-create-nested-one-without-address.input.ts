import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutAddressInput } from './order-create-without-address.input';
import { OrderCreateOrConnectWithoutAddressInput } from './order-create-or-connect-without-address.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateNestedOneWithoutAddressInput {

    @Field(() => OrderCreateWithoutAddressInput, {nullable:true})
    create?: OrderCreateWithoutAddressInput;

    @Field(() => OrderCreateOrConnectWithoutAddressInput, {nullable:true})
    connectOrCreate?: OrderCreateOrConnectWithoutAddressInput;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    connect?: OrderWhereUniqueInput;
}
