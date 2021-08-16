import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleStatus } from './role-status.enum';
import { NestedEnumRoleStatusNullableWithAggregatesFilter } from './nested-enum-role-status-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumRoleStatusNullableFilter } from './nested-enum-role-status-nullable-filter.input';

@InputType()
export class EnumRoleStatusNullableWithAggregatesFilter {

    @Field(() => RoleStatus, {nullable:true})
    equals?: keyof typeof RoleStatus;

    @Field(() => [RoleStatus], {nullable:true})
    in?: Array<keyof typeof RoleStatus>;

    @Field(() => [RoleStatus], {nullable:true})
    notIn?: Array<keyof typeof RoleStatus>;

    @Field(() => NestedEnumRoleStatusNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRoleStatusNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    count?: NestedIntNullableFilter;

    @Field(() => NestedEnumRoleStatusNullableFilter, {nullable:true})
    _min?: NestedEnumRoleStatusNullableFilter;

    @Field(() => NestedEnumRoleStatusNullableFilter, {nullable:true})
    min?: NestedEnumRoleStatusNullableFilter;

    @Field(() => NestedEnumRoleStatusNullableFilter, {nullable:true})
    _max?: NestedEnumRoleStatusNullableFilter;

    @Field(() => NestedEnumRoleStatusNullableFilter, {nullable:true})
    max?: NestedEnumRoleStatusNullableFilter;
}
