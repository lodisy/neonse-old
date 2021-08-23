import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { FileUncheckedUpdateManyWithoutProductInput } from '../file/file-unchecked-update-many-without-product.input';
import { ProductVariantUncheckedUpdateManyWithoutProductInput } from '../product-variant/product-variant-unchecked-update-many-without-product.input';
import { LikeUncheckedUpdateManyWithoutProductInput } from '../like/like-unchecked-update-many-without-product.input';
import { ReviewUncheckedUpdateManyWithoutProductInput } from '../review/review-unchecked-update-many-without-product.input';
import { ProductTranslationUncheckedUpdateManyWithoutProductInput } from '../product-translation/product-translation-unchecked-update-many-without-product.input';

@InputType()
export class ProductUncheckedUpdateWithoutCategoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    sku?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    discription?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    featured?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    draft?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    stock?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    sold?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateManyWithoutProductInput, {nullable:true})
    assets?: FileUncheckedUpdateManyWithoutProductInput;

    @Field(() => ProductVariantUncheckedUpdateManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantUncheckedUpdateManyWithoutProductInput;

    @Field(() => LikeUncheckedUpdateManyWithoutProductInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutProductInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutProductInput;

    @Field(() => ProductTranslationUncheckedUpdateManyWithoutProductInput, {nullable:true})
    translations?: ProductTranslationUncheckedUpdateManyWithoutProductInput;
}
