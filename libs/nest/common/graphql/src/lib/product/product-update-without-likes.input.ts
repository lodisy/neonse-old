import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { FileUpdateManyWithoutProductInput } from '../file/file-update-many-without-product.input';
import { BrandUpdateManyWithoutProductsInput } from '../brand/brand-update-many-without-products.input';
import { ProductTypeUpdateManyWithoutProductsInput } from '../product-type/product-type-update-many-without-products.input';
import { ProductCategoryUpdateManyWithoutProductsInput } from '../product-category/product-category-update-many-without-products.input';
import { ProductVariantUpdateManyWithoutProductInput } from '../product-variant/product-variant-update-many-without-product.input';
import { ReviewUpdateManyWithoutProductInput } from '../review/review-update-many-without-product.input';
import { ProductTranslationUpdateManyWithoutProductInput } from '../product-translation/product-translation-update-many-without-product.input';

@InputType()
export class ProductUpdateWithoutLikesInput {

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

    @Field(() => FileUpdateManyWithoutProductInput, {nullable:true})
    assets?: FileUpdateManyWithoutProductInput;

    @Field(() => BrandUpdateManyWithoutProductsInput, {nullable:true})
    brands?: BrandUpdateManyWithoutProductsInput;

    @Field(() => ProductTypeUpdateManyWithoutProductsInput, {nullable:true})
    types?: ProductTypeUpdateManyWithoutProductsInput;

    @Field(() => ProductCategoryUpdateManyWithoutProductsInput, {nullable:true})
    categories?: ProductCategoryUpdateManyWithoutProductsInput;

    @Field(() => ProductVariantUpdateManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantUpdateManyWithoutProductInput;

    @Field(() => ReviewUpdateManyWithoutProductInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutProductInput;

    @Field(() => ProductTranslationUpdateManyWithoutProductInput, {nullable:true})
    translations?: ProductTranslationUpdateManyWithoutProductInput;
}
