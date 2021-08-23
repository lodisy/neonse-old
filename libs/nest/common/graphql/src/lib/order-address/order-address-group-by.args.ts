import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { OrderAddressWhereInput } from './order-address-where.input';
import { OrderAddressOrderByInput } from './order-address-order-by.input';
import { OrderAddressScalarFieldEnum } from './order-address-scalar-field.enum';
import { OrderAddressScalarWhereWithAggregatesInput } from './order-address-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { OrderAddressCountAggregateInput } from './order-address-count-aggregate.input';
import { OrderAddressMinAggregateInput } from './order-address-min-aggregate.input';
import { OrderAddressMaxAggregateInput } from './order-address-max-aggregate.input';

@ArgsType()
export class OrderAddressGroupByArgs {

    @Field(() => OrderAddressWhereInput, {nullable:true})
    where?: OrderAddressWhereInput;

    @Field(() => [OrderAddressOrderByInput], {nullable:true})
    orderBy?: Array<OrderAddressOrderByInput>;

    @Field(() => [OrderAddressScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof OrderAddressScalarFieldEnum>;

    @Field(() => OrderAddressScalarWhereWithAggregatesInput, {nullable:true})
    having?: OrderAddressScalarWhereWithAggregatesInput;

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
