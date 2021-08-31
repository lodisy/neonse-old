import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileInput } from '../user/user-update-one-required-without-profile.input';
import { BrandUpdateManyWithoutFoundersInput } from '../brand/brand-update-many-without-founders.input';
import { AddressUpdateManyWithoutProfileInput } from '../address/address-update-many-without-profile.input';
import { CardUpdateManyWithoutProfileInput } from '../card/card-update-many-without-profile.input';
import { CommentUpdateManyWithoutByInput } from '../comment/comment-update-many-without-by.input';
import { LikeUpdateManyWithoutByInput } from '../like/like-update-many-without-by.input';
import { ReviewUpdateManyWithoutByInput } from '../review/review-update-many-without-by.input';
import { FileUpdateManyWithoutProfileInput } from '../file/file-update-many-without-profile.input';
import { ProfileUpdateManyWithoutFollowingInput } from './profile-update-many-without-following.input';
import { ProfileUpdateManyWithoutFollowedByInput } from './profile-update-many-without-followed-by.input';
import { MessageUpdateManyWithoutByInput } from '../message/message-update-many-without-by.input';
import { MessageUpdateManyWithoutToInput } from '../message/message-update-many-without-to.input';

@InputType()
export class ProfileUpdateWithoutAvatarInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    mobile?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    point?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutProfileInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProfileInput;

    @Field(() => BrandUpdateManyWithoutFoundersInput, {nullable:true})
    brands?: BrandUpdateManyWithoutFoundersInput;

    @Field(() => AddressUpdateManyWithoutProfileInput, {nullable:true})
    addresses?: AddressUpdateManyWithoutProfileInput;

    @Field(() => CardUpdateManyWithoutProfileInput, {nullable:true})
    cards?: CardUpdateManyWithoutProfileInput;

    @Field(() => CommentUpdateManyWithoutByInput, {nullable:true})
    comments?: CommentUpdateManyWithoutByInput;

    @Field(() => LikeUpdateManyWithoutByInput, {nullable:true})
    likes?: LikeUpdateManyWithoutByInput;

    @Field(() => ReviewUpdateManyWithoutByInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutByInput;

    @Field(() => FileUpdateManyWithoutProfileInput, {nullable:true})
    uploads?: FileUpdateManyWithoutProfileInput;

    @Field(() => ProfileUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: ProfileUpdateManyWithoutFollowingInput;

    @Field(() => ProfileUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: ProfileUpdateManyWithoutFollowedByInput;

    @Field(() => MessageUpdateManyWithoutByInput, {nullable:true})
    messagesSent?: MessageUpdateManyWithoutByInput;

    @Field(() => MessageUpdateManyWithoutToInput, {nullable:true})
    messagesReceived?: MessageUpdateManyWithoutToInput;
}
