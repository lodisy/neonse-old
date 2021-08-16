import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { FileUncheckedCreateNestedOneWithoutProfileAvatarInput } from '../file/file-unchecked-create-nested-one-without-profile-avatar.input';
import { AddressUncheckedCreateNestedManyWithoutProfileInput } from '../address/address-unchecked-create-nested-many-without-profile.input';
import { ReviewUncheckedCreateNestedManyWithoutByInput } from '../review/review-unchecked-create-nested-many-without-by.input';
import { FileUncheckedCreateNestedManyWithoutProfileInput } from '../file/file-unchecked-create-nested-many-without-profile.input';
import { LikeUncheckedCreateNestedManyWithoutByInput } from '../like/like-unchecked-create-nested-many-without-by.input';
import { CommentUncheckedCreateNestedManyWithoutByInput } from '../comment/comment-unchecked-create-nested-many-without-by.input';

@InputType()
export class ProfileUncheckedCreateWithoutCardsInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    name!: string;

    @Field(() => String, {nullable:true})
    phone?: bigint | number;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => FileUncheckedCreateNestedOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileUncheckedCreateNestedOneWithoutProfileAvatarInput;

    @Field(() => AddressUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    addresses?: AddressUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutByInput;

    @Field(() => FileUncheckedCreateNestedManyWithoutProfileInput, {nullable:true})
    uploads?: FileUncheckedCreateNestedManyWithoutProfileInput;

    @Field(() => LikeUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    likes?: LikeUncheckedCreateNestedManyWithoutByInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutByInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutByInput;
}
