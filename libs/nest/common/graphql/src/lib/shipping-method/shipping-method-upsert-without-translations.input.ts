import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ShippingMethodUpdateWithoutTranslationsInput } from './shipping-method-update-without-translations.input';
import { ShippingMethodCreateWithoutTranslationsInput } from './shipping-method-create-without-translations.input';

@InputType()
export class ShippingMethodUpsertWithoutTranslationsInput {

    @Field(() => ShippingMethodUpdateWithoutTranslationsInput, {nullable:false})
    update!: ShippingMethodUpdateWithoutTranslationsInput;

    @Field(() => ShippingMethodCreateWithoutTranslationsInput, {nullable:false})
    create!: ShippingMethodCreateWithoutTranslationsInput;
}
