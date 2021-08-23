import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ProductUpdateManyWithoutTypesInput } from '../product/product-update-many-without-types.input';
import { ProductCategoryUpdateManyWithoutTypesInput } from '../product-category/product-category-update-many-without-types.input';
import { ProductTypeTranslationUpdateManyWithoutProductTypeInput } from '../product-type-translation/product-type-translation-update-many-without-product-type.input';

@InputType()
export class ProductTypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => EnumLanguageCodeFieldUpdateOperationsInput, {nullable:true})
    languageCode?: EnumLanguageCodeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutTypesInput, {nullable:true})
    products?: ProductUpdateManyWithoutTypesInput;

    @Field(() => ProductCategoryUpdateManyWithoutTypesInput, {nullable:true})
    categories?: ProductCategoryUpdateManyWithoutTypesInput;

    @Field(() => ProductTypeTranslationUpdateManyWithoutProductTypeInput, {nullable:true})
    translations?: ProductTypeTranslationUpdateManyWithoutProductTypeInput;
}
