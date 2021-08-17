import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { ProfileUpdateOneRequiredWithoutReviewsInput } from '../profile/profile-update-one-required-without-reviews.input'
import { FileUpdateManyWithoutReviewInput } from '../file/file-update-many-without-review.input'

@InputType()
export class ReviewUpdateWithoutForInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    rate?: IntFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    description?: NullableStringFieldUpdateOperationsInput

    @Field(() => ProfileUpdateOneRequiredWithoutReviewsInput, { nullable: true })
    by?: ProfileUpdateOneRequiredWithoutReviewsInput

    @Field(() => FileUpdateManyWithoutReviewInput, { nullable: true })
    media?: FileUpdateManyWithoutReviewInput
}
