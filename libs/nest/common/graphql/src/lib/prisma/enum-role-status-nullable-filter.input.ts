import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleStatus } from './role-status.enum';
import { NestedEnumRoleStatusNullableFilter } from './nested-enum-role-status-nullable-filter.input';

@InputType()
export class EnumRoleStatusNullableFilter {

    @Field(() => RoleStatus, {nullable:true})
    equals?: keyof typeof RoleStatus;

    @Field(() => [RoleStatus], {nullable:true})
    in?: Array<keyof typeof RoleStatus>;

    @Field(() => [RoleStatus], {nullable:true})
    notIn?: Array<keyof typeof RoleStatus>;

    @Field(() => NestedEnumRoleStatusNullableFilter, {nullable:true})
    not?: NestedEnumRoleStatusNullableFilter;
}
