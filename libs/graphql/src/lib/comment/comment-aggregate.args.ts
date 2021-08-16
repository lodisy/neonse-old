import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { CommentOrderByInput } from './comment-order-by.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentCountAggregateInput } from './comment-count-aggregate.input';
import { CommentMinAggregateInput } from './comment-min-aggregate.input';
import { CommentMaxAggregateInput } from './comment-max-aggregate.input';

@ArgsType()
export class CommentAggregateArgs {

    @Field(() => CommentWhereInput, {nullable:true})
    where?: CommentWhereInput;

    @Field(() => [CommentOrderByInput], {nullable:true})
    orderBy?: Array<CommentOrderByInput>;

    @Field(() => CommentWhereUniqueInput, {nullable:true})
    cursor?: CommentWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommentCountAggregateInput, {nullable:true})
    _count?: CommentCountAggregateInput;

    @Field(() => CommentMinAggregateInput, {nullable:true})
    _min?: CommentMinAggregateInput;

    @Field(() => CommentMaxAggregateInput, {nullable:true})
    _max?: CommentMaxAggregateInput;
}
