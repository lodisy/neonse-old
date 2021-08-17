import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'

@InputType()
export class ReviewUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    rate?: IntFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    description?: NullableStringFieldUpdateOperationsInput
}
