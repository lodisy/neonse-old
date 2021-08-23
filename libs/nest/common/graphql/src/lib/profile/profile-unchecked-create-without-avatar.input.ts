import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { AddressUncheckedCreateNestedManyWithoutProfileInput } from '../address/address-unchecked-create-nested-many-without-profile.input';
import { CardUncheckedCreateNestedManyWithoutProfileInput } from '../card/card-unchecked-create-nested-many-without-profile.input';
import { CommentUncheckedCreateNestedManyWithoutByInput } from '../comment/comment-unchecked-create-nested-many-without-by.input';
import { LikeUncheckedCreateNestedManyWithoutByInput } from '../like/like-unchecked-create-nested-many-without-by.input';
import { ReviewUncheckedCreateNestedManyWithoutByInput } from '../review/review-unchecked-create-nested-many-without-by.input';
import { FileUncheckedCreateNestedManyWithoutProfileInput } from '../file/file-unchecked-create-nested-many-without-profile.input';

@InputType()
export class ProfileUncheckedCreateWithoutAvatarInput {

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
    phone?: bigint | number;

    @Field(() => Int, {nullable:true})
    point?: number;

    @Field(() => Int, {nullable:true})
    level?: number;

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
}
