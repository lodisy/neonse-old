import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ReviewWhereInput } from './review-where.input';
import { ReviewOrderByWithAggregationInput } from './review-order-by-with-aggregation.input';
import { ReviewScalarFieldEnum } from './review-scalar-field.enum';
import { ReviewScalarWhereWithAggregatesInput } from './review-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ReviewCountAggregateInput } from './review-count-aggregate.input';
import { ReviewAvgAggregateInput } from './review-avg-aggregate.input';
import { ReviewSumAggregateInput } from './review-sum-aggregate.input';
import { ReviewMinAggregateInput } from './review-min-aggregate.input';
import { ReviewMaxAggregateInput } from './review-max-aggregate.input';

@ArgsType()
export class ReviewGroupByArgs {

    @Field(() => ReviewWhereInput, {nullable:true})
    where?: ReviewWhereInput;

    @Field(() => [ReviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ReviewOrderByWithAggregationInput>;

    @Field(() => [ReviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ReviewScalarFieldEnum>;

    @Field(() => ReviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ReviewScalarWhereWithAggregatesInput;

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
