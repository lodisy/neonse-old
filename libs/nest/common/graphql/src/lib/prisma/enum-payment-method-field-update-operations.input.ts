import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PaymentMethod } from './payment-method.enum';

@InputType()
export class EnumPaymentMethodFieldUpdateOperationsInput {

    @Field(() => PaymentMethod, {nullable:true})
    set?: keyof typeof PaymentMethod;
}
