import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodTranslationWhereUniqueInput } from './shipping-method-translation-where-unique.input';
import { ShippingMethodTranslationCreateWithoutShippingMethodInput } from './shipping-method-translation-create-without-shipping-method.input';

@InputType()
export class ShippingMethodTranslationCreateOrConnectWithoutShippingMethodInput {

    @Field(() => ShippingMethodTranslationWhereUniqueInput, {nullable:false})
    where!: ShippingMethodTranslationWhereUniqueInput;

    @Field(() => ShippingMethodTranslationCreateWithoutShippingMethodInput, {nullable:false})
    create!: ShippingMethodTranslationCreateWithoutShippingMethodInput;
}
