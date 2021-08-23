import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumOrderStatusFieldUpdateOperationsInput } from '../prisma/enum-order-status-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { OrderAddressUncheckedUpdateOneWithoutOrderInput } from '../order-address/order-address-unchecked-update-one-without-order.input';
import { OrderItemUncheckedUpdateManyWithoutOrderInput } from '../order-item/order-item-unchecked-update-many-without-order.input';
import { PaymentUncheckedUpdateOneWithoutOrderInput } from '../payment/payment-unchecked-update-one-without-order.input';

@InputType()
export class OrderUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    placedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    pending?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumOrderStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumOrderStatusFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalQuantity?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subTotal?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    subTotalWithTax?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    total?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    totalWithTax?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    tracking?: NullableStringFieldUpdateOperationsInput;

    @Field(() => OrderAddressUncheckedUpdateOneWithoutOrderInput, {nullable:true})
    address?: OrderAddressUncheckedUpdateOneWithoutOrderInput;

    @Field(() => OrderItemUncheckedUpdateManyWithoutOrderInput, {nullable:true})
    items?: OrderItemUncheckedUpdateManyWithoutOrderInput;

    @Field(() => PaymentUncheckedUpdateOneWithoutOrderInput, {nullable:true})
    payment?: PaymentUncheckedUpdateOneWithoutOrderInput;
}
