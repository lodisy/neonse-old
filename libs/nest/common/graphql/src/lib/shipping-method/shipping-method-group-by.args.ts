import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingMethodWhereInput } from './shipping-method-where.input';
import { ShippingMethodOrderByInput } from './shipping-method-order-by.input';
import { ShippingMethodScalarFieldEnum } from './shipping-method-scalar-field.enum';
import { ShippingMethodScalarWhereWithAggregatesInput } from './shipping-method-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ShippingMethodCountAggregateInput } from './shipping-method-count-aggregate.input';
import { ShippingMethodMinAggregateInput } from './shipping-method-min-aggregate.input';
import { ShippingMethodMaxAggregateInput } from './shipping-method-max-aggregate.input';

@ArgsType()
export class ShippingMethodGroupByArgs {

    @Field(() => ShippingMethodWhereInput, {nullable:true})
    where?: ShippingMethodWhereInput;

    @Field(() => [ShippingMethodOrderByInput], {nullable:true})
    orderBy?: Array<ShippingMethodOrderByInput>;

    @Field(() => [ShippingMethodScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ShippingMethodScalarFieldEnum>;

    @Field(() => ShippingMethodScalarWhereWithAggregatesInput, {nullable:true})
    having?: ShippingMethodScalarWhereWithAggregatesInput;

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
