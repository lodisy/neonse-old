import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RefundWhereInput } from './refund-where.input';
import { RefundOrderByWithAggregationInput } from './refund-order-by-with-aggregation.input';
import { RefundScalarFieldEnum } from './refund-scalar-field.enum';
import { RefundScalarWhereWithAggregatesInput } from './refund-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RefundCountAggregateInput } from './refund-count-aggregate.input';
import { RefundMinAggregateInput } from './refund-min-aggregate.input';
import { RefundMaxAggregateInput } from './refund-max-aggregate.input';

@ArgsType()
export class RefundGroupByArgs {

    @Field(() => RefundWhereInput, {nullable:true})
    where?: RefundWhereInput;

    @Field(() => [RefundOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RefundOrderByWithAggregationInput>;

    @Field(() => [RefundScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RefundScalarFieldEnum>;

    @Field(() => RefundScalarWhereWithAggregatesInput, {nullable:true})
    having?: RefundScalarWhereWithAggregatesInput;

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
