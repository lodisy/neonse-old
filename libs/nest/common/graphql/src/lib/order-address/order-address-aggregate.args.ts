import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereInput } from './order-address-where.input';
import { OrderAddressOrderByWithRelationInput } from './order-address-order-by-with-relation.input';
import { OrderAddressWhereUniqueInput } from './order-address-where-unique.input';
import { Int } from '@nestjs/graphql';
import { OrderAddressCountAggregateInput } from './order-address-count-aggregate.input';
import { OrderAddressMinAggregateInput } from './order-address-min-aggregate.input';
import { OrderAddressMaxAggregateInput } from './order-address-max-aggregate.input';

@ArgsType()
export class OrderAddressAggregateArgs {

    @Field(() => OrderAddressWhereInput, {nullable:true})
    where?: OrderAddressWhereInput;

    @Field(() => [OrderAddressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<OrderAddressOrderByWithRelationInput>;

    @Field(() => OrderAddressWhereUniqueInput, {nullable:true})
    cursor?: OrderAddressWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => OrderAddressCountAggregateInput, {nullable:true})
    _count?: OrderAddressCountAggregateInput;

    @Field(() => OrderAddressMinAggregateInput, {nullable:true})
    _min?: OrderAddressMinAggregateInput;

    @Field(() => OrderAddressMaxAggregateInput, {nullable:true})
    _max?: OrderAddressMaxAggregateInput;
}
