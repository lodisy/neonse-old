import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { FileUncheckedUpdateOneWithoutProfileAvatarInput } from '../file/file-unchecked-update-one-without-profile-avatar.input';
import { AddressUncheckedUpdateManyWithoutProfileInput } from '../address/address-unchecked-update-many-without-profile.input';
import { CardUncheckedUpdateManyWithoutCardHolderInput } from '../card/card-unchecked-update-many-without-card-holder.input';
import { ReviewUncheckedUpdateManyWithoutByInput } from '../review/review-unchecked-update-many-without-by.input';
import { FileUncheckedUpdateManyWithoutProfileInput } from '../file/file-unchecked-update-many-without-profile.input';
import { LikeUncheckedUpdateManyWithoutByInput } from '../like/like-unchecked-update-many-without-by.input';
import { CommentUncheckedUpdateManyWithoutByInput } from '../comment/comment-unchecked-update-many-without-by.input';

@InputType()
export class ProfileUncheckedUpdateInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

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

    @Field(() => CardUncheckedUpdateManyWithoutCardHolderInput, {nullable:true})
    cards?: CardUncheckedUpdateManyWithoutCardHolderInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutByInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutByInput;

    @Field(() => FileUncheckedUpdateManyWithoutProfileInput, {nullable:true})
    uploads?: FileUncheckedUpdateManyWithoutProfileInput;

    @Field(() => LikeUncheckedUpdateManyWithoutByInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutByInput;

    @Field(() => CommentUncheckedUpdateManyWithoutByInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutByInput;
}
