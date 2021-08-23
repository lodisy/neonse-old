import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { FileUncheckedUpdateOneWithoutProfileAvatarInput } from '../file/file-unchecked-update-one-without-profile-avatar.input';
import { AddressUncheckedUpdateManyWithoutProfileInput } from '../address/address-unchecked-update-many-without-profile.input';
import { CardUncheckedUpdateManyWithoutProfileInput } from '../card/card-unchecked-update-many-without-profile.input';
import { CommentUncheckedUpdateManyWithoutByInput } from '../comment/comment-unchecked-update-many-without-by.input';
import { LikeUncheckedUpdateManyWithoutByInput } from '../like/like-unchecked-update-many-without-by.input';
import { ReviewUncheckedUpdateManyWithoutByInput } from '../review/review-unchecked-update-many-without-by.input';

@InputType()
export class ProfileUncheckedUpdateWithoutUploadsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    point?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => FileUncheckedUpdateOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileUncheckedUpdateOneWithoutProfileAvatarInput;

    @Field(() => AddressUncheckedUpdateManyWithoutProfileInput, {nullable:true})
    addresses?: AddressUncheckedUpdateManyWithoutProfileInput;

    @Field(() => CardUncheckedUpdateManyWithoutProfileInput, {nullable:true})
    cards?: CardUncheckedUpdateManyWithoutProfileInput;

    @Field(() => CommentUncheckedUpdateManyWithoutByInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutByInput;

    @Field(() => LikeUncheckedUpdateManyWithoutByInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutByInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutByInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutByInput;
}
