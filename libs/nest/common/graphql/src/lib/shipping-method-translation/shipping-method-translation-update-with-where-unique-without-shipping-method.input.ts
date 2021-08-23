import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { ShippingMethodTranslationUpdateWithoutShippingMethodInput } from './shipping-method-translation-update-without-shipping-method.input';

@InputType()
export class ShippingMethodTranslationUpdateWithWhereUniqueWithoutShippingMethodInput {

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:false})
    where!: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => ShippingMethodTranslationUpdateWithoutShippingMethodInput, {nullable:false})
    data!: ShippingMethodTranslationUpdateWithoutShippingMethodInput;
}
