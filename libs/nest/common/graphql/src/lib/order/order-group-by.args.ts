import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderWhereInput } from './order-where.input';
import { OrderOrderByInput } from './order-order-by.input';
import { OrderScalarFieldEnum } from './order-scalar-field.enum';
import { OrderScalarWhereWithAggregatesInput } from './order-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderCountAggregateInput } from './order-count-aggregate.input';
import { OrderAvgAggregateInput } from './order-avg-aggregate.input';
import { OrderSumAggregateInput } from './order-sum-aggregate.input';
import { OrderMinAggregateInput } from './order-min-aggregate.input';
import { OrderMaxAggregateInput } from './order-max-aggregate.input';

@ArgsType()
export class OrderGroupByArgs {

    @Field(() => OrderWhereInput, {nullable:true})
    where?: OrderWhereInput;

    @Field(() => [OrderOrderByInput], {nullable:true})
    orderBy?: Array<OrderOrderByInput>;

    @Field(() => [OrderScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderScalarFieldEnum>;

    @Field(() => OrderScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderCountAggregateInput, {nullable:true})
    _count?: OrderCountAggregateInput;

    @Field(() => OrderAvgAggregateInput, {nullable:true})
    _avg?: OrderAvgAggregateInput;

    @Field(() => OrderSumAggregateInput, {nullable:true})
    _sum?: OrderSumAggregateInput;

    @Field(() => OrderMinAggregateInput, {nullable:true})
    _min?: OrderMinAggregateInput;

    @Field(() => OrderMaxAggregateInput, {nullable:true})
    _max?: OrderMaxAggregateInput;
}
