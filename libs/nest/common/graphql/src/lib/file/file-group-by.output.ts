import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FileType } from '../prisma/file-type.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { FileCountAggregate } from './file-count-aggregate.output';
import { FileAvgAggregate } from './file-avg-aggregate.output';
import { FileSumAggregate } from './file-sum-aggregate.output';
import { FileMinAggregate } from './file-min-aggregate.output';
import { FileMaxAggregate } from './file-max-aggregate.output';

@ObjectType()
export class FileGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => String, {nullable:true})
    alt?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => FileType, {nullable:false})
    format!: keyof typeof FileType;

    @Field(() => String, {nullable:false})
    mimeType!: string;

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

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

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

    @Field(() => FileCountAggregate, {nullable:true})
    _count?: FileCountAggregate;

    @Field(() => FileAvgAggregate, {nullable:true})
    _avg?: FileAvgAggregate;

    @Field(() => FileSumAggregate, {nullable:true})
    _sum?: FileSumAggregate;

    @Field(() => FileMinAggregate, {nullable:true})
    _min?: FileMinAggregate;

    @Field(() => FileMaxAggregate, {nullable:true})
    _max?: FileMaxAggregate;
}
