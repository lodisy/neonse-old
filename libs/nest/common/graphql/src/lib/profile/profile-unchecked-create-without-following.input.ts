import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { FileUncheckedCreateNestedOneWithoutProfileAvatarInput } from '../file/file-unchecked-create-nested-one-without-profile-avatar.input';
import { AddressUncheckedCreateNestedManyWithoutProfileInput } from '../address/address-unchecked-create-nested-many-without-profile.input';
import { CardUncheckedCreateNestedManyWithoutProfileInput } from '../card/card-unchecked-create-nested-many-without-profile.input';
import { CommentUncheckedCreateNestedManyWithoutByInput } from '../comment/comment-unchecked-create-nested-many-without-by.input';
import { LikeUncheckedCreateNestedManyWithoutByInput } from '../like/like-unchecked-create-nested-many-without-by.input';
import { ReviewUncheckedCreateNestedManyWithoutByInput } from '../review/review-unchecked-create-nested-many-without-by.input';
import { FileUncheckedCreateNestedManyWithoutProfileInput } from '../file/file-unchecked-create-nested-many-without-profile.input';
import { MessageUncheckedCreateNestedManyWithoutByInput } from '../message/message-unchecked-create-nested-many-without-by.input';
import { MessageUncheckedCreateNestedManyWithoutToInput } from '../message/message-unchecked-create-nested-many-without-to.input';

@InputType()
export class ProfileUncheckedCreateWithoutFollowingInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    name!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsMobilePhone()
    mobile?: string;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => FileUncheckedCreateNestedOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileUncheckedCreateNestedOneWithoutProfileAvatarInput;

    @Field(() => AddressUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => CardUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    cards?: CardUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutByInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutByInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutByInput;

    @Field(() => FileUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    uploads?: FileUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    messagesSent?: MessageUncheckedCreateNestedManyWithoutByInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutToInput, {nullable:true})
    messagesReceived?: MessageUncheckedCreateNestedManyWithoutToInput;
}
