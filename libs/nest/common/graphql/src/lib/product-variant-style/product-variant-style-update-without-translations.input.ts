import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { FileUpdateOneRequiredWithoutProductVariantStyleInput } from '../file/file-update-one-required-without-product-variant-style.input';
import { ProductVariantUpdateOneWithoutStyleInput } from '../product-variant/product-variant-update-one-without-style.input';

@InputType()
export class ProductVariantStyleUpdateWithoutTranslationsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => FileUpdateOneRequiredWithoutProductVariantStyleInput, {nullable:true})
    asset?: FileUpdateOneRequiredWithoutProductVariantStyleInput;

    @Field(() => ProductVariantUpdateOneWithoutStyleInput, {nullable:true})
    productVariant?: ProductVariantUpdateOneWithoutStyleInput;
}
