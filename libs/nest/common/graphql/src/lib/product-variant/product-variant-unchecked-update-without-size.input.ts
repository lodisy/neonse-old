import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumCurrencyCodeFieldUpdateOperationsInput } from '../prisma/enum-currency-code-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { FileUncheckedUpdateManyWithoutProductVariantInput } from '../file/file-unchecked-update-many-without-product-variant.input';
import { ProductVariantColorUncheckedUpdateOneWithoutProductVariantInput } from '../product-variant-color/product-variant-color-unchecked-update-one-without-product-variant.input';
import { ProductVariantStyleUncheckedUpdateOneWithoutProductVariantInput } from '../product-variant-style/product-variant-style-unchecked-update-one-without-product-variant.input';
import { ChannelUncheckedUpdateManyWithoutProductVariantInput } from '../channel/channel-unchecked-update-many-without-product-variant.input';
import { ProductVariantTranslationUncheckedUpdateManyWithoutProductVariantInput } from '../product-variant-translation/product-variant-translation-unchecked-update-many-without-product-variant.input';

@InputType()
export class ProductVariantUncheckedUpdateWithoutSizeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sku?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    brands?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCurrencyCodeFieldUpdateOperationsInput, {nullable:true})
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sale?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    stock?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    sold?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    draft?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    productId?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateManyWithoutProductVariantInput, {nullable:true})
    assets?: FileUncheckedUpdateManyWithoutProductVariantInput;

    @Field(() => ProductVariantColorUncheckedUpdateOneWithoutProductVariantInput, {nullable:true})
    color?: ProductVariantColorUncheckedUpdateOneWithoutProductVariantInput;

    @Field(() => ProductVariantStyleUncheckedUpdateOneWithoutProductVariantInput, {nullable:true})
    style?: ProductVariantStyleUncheckedUpdateOneWithoutProductVariantInput;

    @Field(() => ChannelUncheckedUpdateManyWithoutProductVariantInput, {nullable:true})
    channels?: ChannelUncheckedUpdateManyWithoutProductVariantInput;

    @Field(() => ProductVariantTranslationUncheckedUpdateManyWithoutProductVariantInput, {nullable:true})
    translations?: ProductVariantTranslationUncheckedUpdateManyWithoutProductVariantInput;
}
