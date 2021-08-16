import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleStatus } from './role-status.enum';

@InputType()
export class NestedEnumRoleStatusFilter {

    @Field(() => RoleStatus, {nullable:true})
    equals?: keyof typeof RoleStatus;

    @Field(() => [RoleStatus], {nullable:true})
    in?: Array<keyof typeof RoleStatus>;

    @Field(() => [RoleStatus], {nullable:true})
    notIn?: Array<keyof typeof RoleStatus>;

    @Field(() => NestedEnumRoleStatusFilter, {nullable:true})
    not?: NestedEnumRoleStatusFilter;
}
