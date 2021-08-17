import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringFilter } from '../prisma/string-filter.input'
import { StringNullableFilter } from '../prisma/string-nullable-filter.input'
import { EnumRoleStatusNullableFilter } from '../prisma/enum-role-status-nullable-filter.input'
import { HideField } from '@nestjs/graphql'
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input'
import { DateTimeFilter } from '../prisma/date-time-filter.input'
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input'
import { UserListRelationFilter } from '../user/user-list-relation-filter.input'

@InputType()
export class RoleWhereInput {
    @Field(() => [RoleWhereInput], { nullable: true })
    AND?: Array<RoleWhereInput>

    @Field(() => [RoleWhereInput], { nullable: true })
    OR?: Array<RoleWhereInput>

    @Field(() => [RoleWhereInput], { nullable: true })
    NOT?: Array<RoleWhereInput>

    @Field(() => StringFilter, { nullable: true })
    id?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter

    @Field(() => StringFilter, { nullable: true })
    slug?: StringFilter

    @Field(() => StringNullableFilter, { nullable: true })
    description?: StringNullableFilter

    @HideField()
    status?: EnumRoleStatusNullableFilter

    @Field(() => BoolNullableFilter, { nullable: true })
    isDefault?: BoolNullableFilter

    @Field(() => DateTimeFilter, { nullable: true })
    createdAt?: DateTimeFilter

    @Field(() => DateTimeNullableFilter, { nullable: true })
    updatedAt?: DateTimeNullableFilter

    @Field(() => UserListRelationFilter, { nullable: true })
    users?: UserListRelationFilter
}
