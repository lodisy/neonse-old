import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input'

@InputType()
export class BrandUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    name?: StringFieldUpdateOperationsInput

    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    slug?: StringFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    country?: NullableStringFieldUpdateOperationsInput

    @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
    year?: NullableIntFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    description?: NullableStringFieldUpdateOperationsInput
}
