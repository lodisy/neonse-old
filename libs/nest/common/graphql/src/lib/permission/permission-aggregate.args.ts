import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { PermissionOrderByInput } from './permission-order-by.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionCountAggregateInput } from './permission-count-aggregate.input';
import { PermissionMinAggregateInput } from './permission-min-aggregate.input';
import { PermissionMaxAggregateInput } from './permission-max-aggregate.input';

@ArgsType()
export class PermissionAggregateArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByInput], {nullable:true})
    orderBy?: Array<PermissionOrderByInput>;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    cursor?: PermissionWhereUniqueInput;

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
