import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableBigIntFieldUpdateOperationsInput } from '../prisma/nullable-big-int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileInput } from '../user/user-update-one-required-without-profile.input';
import { BrandUpdateManyWithoutFoundersInput } from '../brand/brand-update-many-without-founders.input';
import { FileUpdateOneWithoutProfileAvatarInput } from '../file/file-update-one-without-profile-avatar.input';
import { AddressUpdateManyWithoutProfileInput } from '../address/address-update-many-without-profile.input';
import { CardUpdateManyWithoutCardHolderInput } from '../card/card-update-many-without-card-holder.input';
import { ReviewUpdateManyWithoutByInput } from '../review/review-update-many-without-by.input';
import { FileUpdateManyWithoutProfileInput } from '../file/file-update-many-without-profile.input';
import { ProfileUpdateManyWithoutFollowingInput } from './profile-update-many-without-following.input';
import { ProfileUpdateManyWithoutFollowedByInput } from './profile-update-many-without-followed-by.input';
import { CommentUpdateManyWithoutByInput } from '../comment/comment-update-many-without-by.input';

@InputType()
export class ProfileUpdateWithoutLikesInput {

    @HideField()
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableBigIntFieldUpdateOperationsInput, {nullable:true})
    phone?: NullableBigIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    point?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    level?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutProfileInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutProfileInput;

    @HideField()
    brands?: BrandUpdateManyWithoutFoundersInput;

    @Field(() => FileUpdateOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileUpdateOneWithoutProfileAvatarInput;

    @Field(() => AddressUpdateManyWithoutProfileInput, {nullable:true})
    addresses?: AddressUpdateManyWithoutProfileInput;

    @Field(() => CardUpdateManyWithoutCardHolderInput, {nullable:true})
    cards?: CardUpdateManyWithoutCardHolderInput;

    @Field(() => ReviewUpdateManyWithoutByInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutByInput;

    @Field(() => FileUpdateManyWithoutProfileInput, {nullable:true})
    uploads?: FileUpdateManyWithoutProfileInput;

    @Field(() => ProfileUpdateManyWithoutFollowingInput, {nullable:true})
    followedBy?: ProfileUpdateManyWithoutFollowingInput;

    @Field(() => ProfileUpdateManyWithoutFollowedByInput, {nullable:true})
    following?: ProfileUpdateManyWithoutFollowedByInput;

    @Field(() => CommentUpdateManyWithoutByInput, {nullable:true})
    comments?: CommentUpdateManyWithoutByInput;
}
