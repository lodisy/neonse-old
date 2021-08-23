import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ProductCategoryUncheckedUpdateManyWithoutParentInput } from './product-category-unchecked-update-many-without-parent.input';
import { ProductCategoryTranslationUncheckedUpdateManyWithoutProductCategoryInput } from '../product-category-translation/product-category-translation-unchecked-update-many-without-product-category.input';

@InputType()
export class ProductCategoryUncheckedUpdateWithoutParentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUncheckedUpdateManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryUncheckedUpdateManyWithoutParentInput;

    @Field(() => ProductCategoryTranslationUncheckedUpdateManyWithoutProductCategoryInput, {nullable:true})
    translations?: ProductCategoryTranslationUncheckedUpdateManyWithoutProductCategoryInput;
}
