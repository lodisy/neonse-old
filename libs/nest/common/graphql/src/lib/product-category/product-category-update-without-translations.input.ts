import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumLanguageCodeFieldUpdateOperationsInput } from '../prisma/enum-language-code-field-update-operations.input';
import { ProductCategoryUpdateOneWithoutChildrenInput } from './product-category-update-one-without-children.input';
import { ProductCategoryUpdateManyWithoutParentInput } from './product-category-update-many-without-parent.input';
import { ProductUpdateManyWithoutCategoriesInput } from '../product/product-update-many-without-categories.input';
import { ProductTypeUpdateManyWithoutCategoriesInput } from '../product-type/product-type-update-many-without-categories.input';

@InputType()
export class ProductCategoryUpdateWithoutTranslationsInput {

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

    @Field(() => ProductCategoryUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCategoryUpdateOneWithoutChildrenInput;

    @Field(() => ProductCategoryUpdateManyWithoutParentInput, {nullable:true})
    children?: ProductCategoryUpdateManyWithoutParentInput;

    @Field(() => ProductUpdateManyWithoutCategoriesInput, {nullable:true})
    products?: ProductUpdateManyWithoutCategoriesInput;

    @Field(() => ProductTypeUpdateManyWithoutCategoriesInput, {nullable:true})
    types?: ProductTypeUpdateManyWithoutCategoriesInput;
}
