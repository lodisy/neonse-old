import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { PermissionOrderByWithAggregationInput } from './permission-order-by-with-aggregation.input';
import { PermissionScalarFieldEnum } from './permission-scalar-field.enum';
import { PermissionScalarWhereWithAggregatesInput } from './permission-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregateInput } from './permission-count-aggregate.input';
import { PermissionMinAggregateInput } from './permission-min-aggregate.input';
import { PermissionMaxAggregateInput } from './permission-max-aggregate.input';

@ArgsType()
export class PermissionGroupByArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PermissionOrderByWithAggregationInput>;

    @Field(() => [PermissionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PermissionScalarFieldEnum>;

    @Field(() => PermissionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PermissionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionCountAggregateInput, {nullable:true})
    _count?: PermissionCountAggregateInput;

    @Field(() => PermissionMinAggregateInput, {nullable:true})
    _min?: PermissionMinAggregateInput;

    @Field(() => PermissionMaxAggregateInput, {nullable:true})
    _max?: PermissionMaxAggregateInput;
}
