import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { RoleStatus } from './role-status.enum'
import { NestedEnumRoleStatusFilter } from './nested-enum-role-status-filter.input'

@InputType()
export class EnumRoleStatusFilter {
    @Field(() => RoleStatus, { nullable: true })
    equals?: keyof typeof RoleStatus;

    @Field(() => [RoleStatus], { nullable: true })
    in?: Array<keyof typeof RoleStatus>

    @Field(() => [RoleStatus], { nullable: true })
    notIn?: Array<keyof typeof RoleStatus>

    @Field(() => NestedEnumRoleStatusFilter, { nullable: true })
    not?: NestedEnumRoleStatusFilter
}
