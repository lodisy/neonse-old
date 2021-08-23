import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderStatus } from '../prisma/order-status.enum';
import { Int } from '@nestjs/graphql';
import { OrderAddressUncheckedCreateNestedOneWithoutOrderInput } from '../order-address/order-address-unchecked-create-nested-one-without-order.input';
import { PaymentUncheckedCreateNestedOneWithoutOrderInput } from '../payment/payment-unchecked-create-nested-one-without-order.input';

@InputType()
export class OrderUncheckedCreateWithoutItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:false})
    placedAt!: Date | string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Boolean, {nullable:true})
    pending?: boolean;

    @Field(() => OrderStatus, {nullable:true})
    status?: keyof typeof OrderStatus;

    @Field(() => Int, {nullable:false})
    totalQuantity!: number;

    @Field(() => Int, {nullable:false})
    subTotal!: number;

    @Field(() => Int, {nullable:false})
    subTotalWithTax!: number;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => Int, {nullable:false})
    totalWithTax!: number;

    @Field(() => String, {nullable:true})
    tracking?: string;

    @Field(() => OrderAddressUncheckedCreateNestedOneWithoutOrderInput, {nullable:true})
    address?: OrderAddressUncheckedCreateNestedOneWithoutOrderInput;

    @Field(() => PaymentUncheckedCreateNestedOneWithoutOrderInput, {nullable:true})
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput;
}
