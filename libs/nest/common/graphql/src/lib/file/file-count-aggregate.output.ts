import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    alt!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    caption!: number;

    @Field(() => Int, {nullable:false})
    format!: number;

    @Field(() => Int, {nullable:false})
    mimeType!: number;

    @Field(() => Int, {nullable:false})
    size!: number;

    @Field(() => Int, {nullable:false})
    width!: number;

    @Field(() => Int, {nullable:false})
    height!: number;

    @Field(() => Int, {nullable:false})
    sourceId!: number;

    @Field(() => Int, {nullable:false})
    autoPlay!: number;

    @Field(() => Int, {nullable:false})
    customFields!: number;

    @Field(() => Int, {nullable:false})
    profileId!: number;

    @Field(() => Int, {nullable:false})
    profileAvatarId!: number;

    @Field(() => Int, {nullable:false})
    productId!: number;

    @Field(() => Int, {nullable:false})
    productVariantId!: number;

    @Field(() => Int, {nullable:false})
    reviewId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
