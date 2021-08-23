import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ShippingMethodUpdateOneRequiredWithoutTranslationsInput } from '../shipping-method/shipping-method-update-one-required-without-translations.input';

@InputType()
export class ShippingMethodTranslationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ShippingMethodUpdateOneRequiredWithoutTranslationsInput, {nullable:true})
    shippingMethod?: ShippingMethodUpdateOneRequiredWithoutTranslationsInput;
}
