import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GuestWhereInput } from './guest-where.input';
import { GuestOrderByInput } from './guest-order-by.input';
import { GuestScalarFieldEnum } from './guest-scalar-field.enum';
import { GuestScalarWhereWithAggregatesInput } from './guest-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GuestCountAggregateInput } from './guest-count-aggregate.input';
import { GuestMinAggregateInput } from './guest-min-aggregate.input';
import { GuestMaxAggregateInput } from './guest-max-aggregate.input';

@ArgsType()
export class GuestGroupByArgs {

    @Field(() => GuestWhereInput, {nullable:true})
    where?: GuestWhereInput;

    @Field(() => [GuestOrderByInput], {nullable:true})
    orderBy?: Array<GuestOrderByInput>;

    @Field(() => [GuestScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GuestScalarFieldEnum>;

    @Field(() => GuestScalarWhereWithAggregatesInput, {nullable:true})
    having?: GuestScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GuestCountAggregateInput, {nullable:true})
    _count?: GuestCountAggregateInput;

    @Field(() => GuestMinAggregateInput, {nullable:true})
    _min?: GuestMinAggregateInput;

    @Field(() => GuestMaxAggregateInput, {nullable:true})
    _max?: GuestMaxAggregateInput;
}
