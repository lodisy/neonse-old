import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumActionFilter } from '../prisma/enum-action-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PermissionWhereInput {

    @Field(() => [PermissionWhereInput], {nullable:true})
    AND?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    OR?: Array<PermissionWhereInput>;

    @Field(() => [PermissionWhereInput], {nullable:true})
    NOT?: Array<PermissionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumActionFilter, {nullable:true})
    action?: EnumActionFilter;

    @Field(() => StringFilter, {nullable:true})
    subject?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    fields?: StringNullableListFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    conditions?: JsonNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    inverted?: BoolNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    reason?: StringNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;
}
