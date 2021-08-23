import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderCreateWithoutAddressInput } from './order-create-without-address.input';

@InputType()
export class OrderCreateOrConnectWithoutAddressInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderCreateWithoutAddressInput, {nullable:false})
    create!: OrderCreateWithoutAddressInput;
}
