import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { ReviewOrderByInput } from './review-order-by.input';
import { ReviewWhereUniqueInput } from './review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ReviewCountAggregateInput } from './review-count-aggregate.input';
import { ReviewAvgAggregateInput } from './review-avg-aggregate.input';
import { ReviewSumAggregateInput } from './review-sum-aggregate.input';
import { ReviewMinAggregateInput } from './review-min-aggregate.input';
import { ReviewMaxAggregateInput } from './review-max-aggregate.input';

@ArgsType()
export class ReviewAggregateArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByInput], {nullable:true})
    orderBy?: Array<ReviewOrderByInput>;

    @Field(() => ReviewWhereUniqueInput, {nullable:true})
    cursor?: ReviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ReviewCountAggregateInput, {nullable:true})
    _count?: ReviewCountAggregateInput;

    @Field(() => ReviewAvgAggregateInput, {nullable:true})
    _avg?: ReviewAvgAggregateInput;

    @Field(() => ReviewSumAggregateInput, {nullable:true})
    _sum?: ReviewSumAggregateInput;

    @Field(() => ReviewMinAggregateInput, {nullable:true})
    _min?: ReviewMinAggregateInput;

    @Field(() => ReviewMaxAggregateInput, {nullable:true})
    _max?: ReviewMaxAggregateInput;
}
