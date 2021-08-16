import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ProductCategoryUpdateOneWithoutChildrenInput } from './product-category-update-one-without-children.input';
import { ProductUpdateManyWithoutCategoriesInput } from '../product/product-update-many-without-categories.input';
import { ProductTypeUpdateManyWithoutCategoriesInput } from '../product-type/product-type-update-many-without-categories.input';

@InputType()
export class ProductCategoryUpdateWithoutChildrenInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => ProductCategoryUpdateOneWithoutChildrenInput, {nullable:true})
    parent?: ProductCategoryUpdateOneWithoutChildrenInput;

    @Field(() => ProductUpdateManyWithoutCategoriesInput, {nullable:true})
    products?: ProductUpdateManyWithoutCategoriesInput;

    @Field(() => ProductTypeUpdateManyWithoutCategoriesInput, {nullable:true})
    types?: ProductTypeUpdateManyWithoutCategoriesInput;
}
