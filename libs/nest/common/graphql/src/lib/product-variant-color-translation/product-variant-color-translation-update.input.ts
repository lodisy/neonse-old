import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ProductVariantColorUpdateOneWithoutTranslationsInput } from '../product-variant-color/product-variant-color-update-one-without-translations.input';

@InputType()
export class ProductVariantColorTranslationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductVariantColorUpdateOneWithoutTranslationsInput, {nullable:true})
    ProductVariantColor?: ProductVariantColorUpdateOneWithoutTranslationsInput;
}
