import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { EnumContentTypeFieldUpdateOperationsInput } from '../prisma/enum-content-type-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input'

@InputType()
export class LikeUncheckedUpdateManyWithoutLikesInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => EnumContentTypeFieldUpdateOperationsInput, { nullable: true })
    type?: EnumContentTypeFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    productId?: NullableStringFieldUpdateOperationsInput

    @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
    createdAt?: DateTimeFieldUpdateOperationsInput
}
