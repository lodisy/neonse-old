import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { EnumContentTypeFieldUpdateOperationsInput } from '../prisma/enum-content-type-field-update-operations.input';
import { ProfileUpdateOneRequiredWithoutLikesInput } from '../profile/profile-update-one-required-without-likes.input';

@InputType()
export class LikeUpdateWithoutProductInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => EnumContentTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumContentTypeFieldUpdateOperationsInput;

    @Field(() => ProfileUpdateOneRequiredWithoutLikesInput, {nullable:true})
    by?: ProfileUpdateOneRequiredWithoutLikesInput;
}
