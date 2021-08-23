import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutProfileInput } from '../user/user-create-nested-one-without-profile.input';
import { FileCreateNestedOneWithoutProfileAvatarInput } from '../file/file-create-nested-one-without-profile-avatar.input';
import { BrandCreateNestedManyWithoutFoundersInput } from '../brand/brand-create-nested-many-without-founders.input';
import { CardCreateNestedManyWithoutProfileInput } from '../card/card-create-nested-many-without-profile.input';
import { CommentCreateNestedManyWithoutByInput } from '../comment/comment-create-nested-many-without-by.input';
import { LikeCreateNestedManyWithoutByInput } from '../like/like-create-nested-many-without-by.input';
import { ReviewCreateNestedManyWithoutByInput } from '../review/review-create-nested-many-without-by.input';
import { FileCreateNestedManyWithoutProfileInput } from '../file/file-create-nested-many-without-profile.input';
import { ProfileCreateNestedManyWithoutFollowingInput } from './profile-create-nested-many-without-following.input';
import { ProfileCreateNestedManyWithoutFollowedByInput } from './profile-create-nested-many-without-followed-by.input';

@InputType()
export class ProfileCreateWithoutAddressesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

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

    @Field(() => FileCreateNestedOneWithoutProfileAvatarInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutProfileAvatarInput;

    @Field(() => BrandCreateNestedManyWithoutFoundersInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutFoundersInput;

    @Field(() => CardCreateNestedManyWithoutProfileInput, {nullable:true})
    cards?: CardCreateNestedManyWithoutProfileInput;

    @Field(() => CommentCreateNestedManyWithoutByInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutByInput;

    @Field(() => LikeCreateNestedManyWithoutByInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutByInput;

    @Field(() => ReviewCreateNestedManyWithoutByInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutByInput;

    @Field(() => FileCreateNestedManyWithoutProfileInput, {nullable:true})
    uploads?: FileCreateNestedManyWithoutProfileInput;

    @Field(() => ProfileCreateNestedManyWithoutFollowingInput, {nullable:true})
    followedBy?: ProfileCreateNestedManyWithoutFollowingInput;

    @Field(() => ProfileCreateNestedManyWithoutFollowedByInput, {nullable:true})
    following?: ProfileCreateNestedManyWithoutFollowedByInput;
}
