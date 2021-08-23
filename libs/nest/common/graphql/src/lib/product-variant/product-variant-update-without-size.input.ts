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
import { FileUpdateManyWithoutProductVariantInput } from '../file/file-update-many-without-product-variant.input';
import { ProductVariantColorUpdateOneWithoutProductVariantInput } from '../product-variant-color/product-variant-color-update-one-without-product-variant.input';
import { ProductVariantStyleUpdateOneWithoutProductVariantInput } from '../product-variant-style/product-variant-style-update-one-without-product-variant.input';
import { ChannelUpdateManyWithoutProductVariantInput } from '../channel/channel-update-many-without-product-variant.input';
import { ProductUpdateOneRequiredWithoutVariantsInput } from '../product/product-update-one-required-without-variants.input';
import { ProductVariantTranslationUpdateManyWithoutProductVariantInput } from '../product-variant-translation/product-variant-translation-update-many-without-product-variant.input';

@InputType()
export class ProductVariantUpdateWithoutSizeInput {

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

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => FileUpdateManyWithoutProductVariantInput, {nullable:true})
    assets?: FileUpdateManyWithoutProductVariantInput;

    @Field(() => ProductVariantColorUpdateOneWithoutProductVariantInput, {nullable:true})
    color?: ProductVariantColorUpdateOneWithoutProductVariantInput;

    @Field(() => ProductVariantStyleUpdateOneWithoutProductVariantInput, {nullable:true})
    style?: ProductVariantStyleUpdateOneWithoutProductVariantInput;

    @Field(() => ChannelUpdateManyWithoutProductVariantInput, {nullable:true})
    channels?: ChannelUpdateManyWithoutProductVariantInput;

    @Field(() => ProductUpdateOneRequiredWithoutVariantsInput, {nullable:true})
    product?: ProductUpdateOneRequiredWithoutVariantsInput;

    @Field(() => ProductVariantTranslationUpdateManyWithoutProductVariantInput, {nullable:true})
    translations?: ProductVariantTranslationUpdateManyWithoutProductVariantInput;
}
