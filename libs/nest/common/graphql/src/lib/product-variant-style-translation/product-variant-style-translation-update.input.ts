import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ProductVariantStyleUpdateOneWithoutTranslationsInput } from '../product-variant-style/product-variant-style-update-one-without-translations.input';

@InputType()
export class ProductVariantStyleTranslationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ProductVariantStyleUpdateOneWithoutTranslationsInput, {nullable:true})
    productVariantStyle?: ProductVariantStyleUpdateOneWithoutTranslationsInput;
}
