import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LikeWhereInput } from './like-where.input';
import { LikeOrderByInput } from './like-order-by.input';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LikeCountAggregateInput } from './like-count-aggregate.input';
import { LikeMinAggregateInput } from './like-min-aggregate.input';
import { LikeMaxAggregateInput } from './like-max-aggregate.input';

@ArgsType()
export class LikeAggregateArgs {

    @Field(() => LikeWhereInput, {nullable:true})
    where?: LikeWhereInput;

    @Field(() => [LikeOrderByInput], {nullable:true})
    orderBy?: Array<LikeOrderByInput>;

    @Field(() => LikeWhereUniqueInput, {nullable:true})
    cursor?: LikeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LikeCountAggregateInput, {nullable:true})
    _count?: LikeCountAggregateInput;

    @Field(() => LikeMinAggregateInput, {nullable:true})
    _min?: LikeMinAggregateInput;

    @Field(() => LikeMaxAggregateInput, {nullable:true})
    _max?: LikeMaxAggregateInput;
}
