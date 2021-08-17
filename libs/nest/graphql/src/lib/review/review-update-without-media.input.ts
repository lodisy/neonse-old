import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input'
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input'
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input'
import { ProfileUpdateOneRequiredWithoutReviewsInput } from '../profile/profile-update-one-required-without-reviews.input'
import { ProductUpdateOneRequiredWithoutReviewsInput } from '../product/product-update-one-required-without-reviews.input'

@InputType()
export class ReviewUpdateWithoutMediaInput {
    @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
    id?: StringFieldUpdateOperationsInput

    @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
    rate?: IntFieldUpdateOperationsInput

    @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
    description?: NullableStringFieldUpdateOperationsInput

    @Field(() => ProfileUpdateOneRequiredWithoutReviewsInput, { nullable: true })
    by?: ProfileUpdateOneRequiredWithoutReviewsInput

    @Field(() => ProductUpdateOneRequiredWithoutReviewsInput, { nullable: true })
    for?: ProductUpdateOneRequiredWithoutReviewsInput
}
