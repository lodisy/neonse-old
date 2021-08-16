import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleStatus } from './role-status.enum';
import { NestedEnumRoleStatusWithAggregatesFilter } from './nested-enum-role-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRoleStatusFilter } from './nested-enum-role-status-filter.input';

@InputType()
export class EnumRoleStatusWithAggregatesFilter {

    @Field(() => RoleStatus, {nullable:true})
    equals?: keyof typeof RoleStatus;

    @Field(() => [RoleStatus], {nullable:true})
    in?: Array<keyof typeof RoleStatus>;

    @Field(() => [RoleStatus], {nullable:true})
    notIn?: Array<keyof typeof RoleStatus>;

    @Field(() => NestedEnumRoleStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    count?: NestedIntFilter;

    @Field(() => NestedEnumRoleStatusFilter, {nullable:true})
    _min?: NestedEnumRoleStatusFilter;

    @Field(() => NestedEnumRoleStatusFilter, {nullable:true})
    min?: NestedEnumRoleStatusFilter;

    @Field(() => NestedEnumRoleStatusFilter, {nullable:true})
    _max?: NestedEnumRoleStatusFilter;

    @Field(() => NestedEnumRoleStatusFilter, {nullable:true})
    max?: NestedEnumRoleStatusFilter;
}
