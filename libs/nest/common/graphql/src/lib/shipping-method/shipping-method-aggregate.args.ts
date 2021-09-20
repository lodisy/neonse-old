import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodWhereInput } from './shipping-method-where.input';
import { ShippingMethodOrderByWithRelationInput } from './shipping-method-order-by-with-relation.input';
import { ShippingMethodWhereUniqueInput } from './shipping-method-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodCountAggregateInput } from './shipping-method-count-aggregate.input';
import { ShippingMethodMinAggregateInput } from './shipping-method-min-aggregate.input';
import { ShippingMethodMaxAggregateInput } from './shipping-method-max-aggregate.input';

@ArgsType()
export class ShippingMethodAggregateArgs {

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    where?: ShippingMethodWhereInput;

    @Field(() => [ShippingMethodOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingMethodOrderByWithRelationInput>;

    @Field(() => ShippingMethodWhereUniqueInput, {nullable:true})
    cursor?: ShippingMethodWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ShippingMethodCountAggregateInput, {nullable:true})
    _count?: ShippingMethodCountAggregateInput;

    @Field(() => ShippingMethodMinAggregateInput, {nullable:true})
    _min?: ShippingMethodMinAggregateInput;

    @Field(() => ShippingMethodMaxAggregateInput, {nullable:true})
    _max?: ShippingMethodMaxAggregateInput;
}
