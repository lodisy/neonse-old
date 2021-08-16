import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { BrandCreateNestedManyWithoutFoundersInput } from '../brand/brand-create-nested-many-without-founders.input';
import { FileCreateNestedOneWithoutProfileAvatarInput } from '../file/file-create-nested-one-without-profile-avatar.input';
import { CardCreateNestedManyWithoutCardHolderInput } from '../card/card-create-nested-many-without-card-holder.input';
import { ReviewCreateNestedManyWithoutByInput } from '../review/review-create-nested-many-without-by.input';
import { FileCreateNestedManyWithoutProfileInput } from '../file/file-create-nested-many-without-profile.input';
import { LikeCreateNestedManyWithoutByInput } from '../like/like-create-nested-many-without-by.input';
import { ProfileCreateNestedManyWithoutFollowingInput } from './profile-create-nested-many-without-following.input';
import { ProfileCreateNestedManyWithoutFollowedByInput } from './profile-create-nested-many-without-followed-by.input';
import { CommentCreateNestedManyWithoutByInput } from '../comment/comment-create-nested-many-without-by.input';

@InputType()
export class ProfileCreateWithoutAddressesInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(2)
    name!: string;

    @Field(() => String, {nullable:true})
    phone?: bigint | number;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:false})
    user!: UserCreateNestedOneWithoutProfileInput;

    @HideField()
    brands?: BrandCreateNestedManyWithoutFoundersInput;

    @Field(() => FileCreateNestedOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutProfileAvatarInput;

    @Field(() => CardCreateNestedManyWithoutCardHolderInput, {nullable:true})
    cards?: CardCreateNestedManyWithoutCardHolderInput;

    @Field(() => ReviewCreateNestedManyWithoutByInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutByInput;

    @Field(() => FileCreateNestedManyWithoutProfileInput, {nullable:true})
    uploads?: FileCreateNestedManyWithoutProfileInput;

    @Field(() => LikeCreateNestedManyWithoutByInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutByInput;

    @Field(() => ProfileCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: ProfileCreateNestedManyWithoutFollowingInput;

    @Field(() => ProfileCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: ProfileCreateNestedManyWithoutFollowedByInput;

    @Field(() => CommentCreateNestedManyWithoutByInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutByInput;
}
