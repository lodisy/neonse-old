import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentType } from '../prisma/content-type.enum';
import { LikeCountAggregate } from './like-count-aggregate.output';
import { LikeMinAggregate } from './like-min-aggregate.output';
import { LikeMaxAggregate } from './like-max-aggregate.output';

@ObjectType()
export class LikeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    profileId!: string;

    @Field(() => ContentType, {nullable:false})
    type!: keyof typeof ContentType;

    @Field(() => String, {nullable:true})
    productId?: string;

    @Field(() => LikeCountAggregate, {nullable:true})
    _count?: LikeCountAggregate;

    @Field(() => LikeMinAggregate, {nullable:true})
    _min?: LikeMinAggregate;

    @Field(() => LikeMaxAggregate, {nullable:true})
    _max?: LikeMaxAggregate;
}
