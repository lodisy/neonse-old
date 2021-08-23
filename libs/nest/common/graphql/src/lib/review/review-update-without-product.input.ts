import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ProfileUpdateOneRequiredWithoutReviewsInput } from '../profile/profile-update-one-required-without-reviews.input';
import { FileUpdateManyWithoutReviewInput } from '../file/file-update-many-without-review.input';

@InputType()
export class ReviewUpdateWithoutProductInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rate?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneRequiredWithoutReviewsInput, {nullable:true})
    by?: ProfileUpdateOneRequiredWithoutReviewsInput;

    @Field(() => FileUpdateManyWithoutReviewInput, {nullable:true})
    uploads?: FileUpdateManyWithoutReviewInput;
}
