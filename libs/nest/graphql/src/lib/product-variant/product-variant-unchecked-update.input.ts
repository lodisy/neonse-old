import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { HideField } from '@nestjs/graphql'
import { EnumSizeFieldUpdateOperationsInput } from '../prisma/enum-size-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input'
import { ProductVariantUpdateimagesInput } from '../prisma/product-variant-updateimages.input'

@InputType()
export class ProductVariantUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    productId?: StringFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    name?: NullableStringFieldUpdateOperationsInput

    @HideField()
    sku?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    brands?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    style?: StringFieldUpdateOperationsInput

    @Field(() => EnumSizeFieldUpdateOperationsInput, { nullable: true })
    size?: EnumSizeFieldUpdateOperationsInput

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    price?: IntFieldUpdateOperationsInput

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    sale?: NullableIntFieldUpdateOperationsInput

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    stock?: NullableIntFieldUpdateOperationsInput

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    sold?: IntFieldUpdateOperationsInput

    @Field(() => ProductVariantUpdateimagesInput, { nullable: true })
    images?: ProductVariantUpdateimagesInput
}
