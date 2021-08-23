import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FileMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    alt?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => FileType, {nullable:true})
    format?: keyof typeof FileType;

    @Field(() => String, {nullable:true})
    mimeType?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => String, {nullable:true})
    sourceId?: string;

    @Field(() => Boolean, {nullable:true})
    autoPlay?: boolean;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:true})
    profileAvatarId?: string;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => String, {nullable:true})
    productVariantId?: string;

    @Field(() => String, {nullable:true})
    reviewId?: string;
}
