import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { ProductUpdateManyWithoutTypesInput } from '../product/product-update-many-without-types.input'
import { ProductCategoryUpdateManyWithoutTypesInput } from '../product-category/product-category-update-many-without-types.input'

@InputType()
export class ProductTypeUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    slug?: StringFieldUpdateOperationsInput

    @Field(() => ProductUpdateManyWithoutTypesInput, { nullable: true })
    products?: ProductUpdateManyWithoutTypesInput

    @Field(() => ProductCategoryUpdateManyWithoutTypesInput, { nullable: true })
    categories?: ProductCategoryUpdateManyWithoutTypesInput
}
