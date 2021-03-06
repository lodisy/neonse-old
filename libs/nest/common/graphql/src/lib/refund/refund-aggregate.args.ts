import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { RefundOrderByWithRelationInput } from './refund-order-by-with-relation.input';
import { RefundWhereUniqueInput } from './refund-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RefundCountAggregateInput } from './refund-count-aggregate.input';
import { RefundMinAggregateInput } from './refund-min-aggregate.input';
import { RefundMaxAggregateInput } from './refund-max-aggregate.input';

@ArgsType()
export class RefundAggregateArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    where?: RefundWhereInput;

    @Field(() => [RefundOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RefundOrderByWithRelationInput>;

    @Field(() => RefundWhereUniqueInput, {nullable:true})
    cursor?: RefundWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RefundCountAggregateInput, {nullable:true})
    _count?: RefundCountAggregateInput;

    @Field(() => RefundMinAggregateInput, {nullable:true})
    _min?: RefundMinAggregateInput;

    @Field(() => RefundMaxAggregateInput, {nullable:true})
    _max?: RefundMaxAggregateInput;
}
