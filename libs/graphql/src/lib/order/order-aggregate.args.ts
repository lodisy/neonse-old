import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { OrderOrderByInput } from './order-order-by.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregateInput } from './order-count-aggregate.input';
import { OrderMinAggregateInput } from './order-min-aggregate.input';
import { OrderMaxAggregateInput } from './order-max-aggregate.input';

@ArgsType()
export class OrderAggregateArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByInput], {nullable:true})
    orderBy?: Array<OrderOrderByInput>;

    @Field(() => OrderWhereUniqueInput, {nullable:true})
    cursor?: OrderWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: OrderCountAggregateInput;

    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: OrderMinAggregateInput;

    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: OrderMaxAggregateInput;
}
