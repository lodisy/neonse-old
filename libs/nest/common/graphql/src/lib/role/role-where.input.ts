import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumRoleStatusNullableFilter } from '../prisma/enum-role-status-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { ChannelListRelationFilter } from '../channel/channel-list-relation-filter.input';
import { PermissionListRelationFilter } from '../permission/permission-list-relation-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { RoleTranslationListRelationFilter } from '../role-translation/role-translation-list-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumRoleStatusNullableFilter, {nullable:true})
    status?: EnumRoleStatusNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isDefault?: BoolNullableFilter;

    @Field(() => ChannelListRelationFilter, {nullable:true})
    channels?: ChannelListRelationFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => RoleTranslationListRelationFilter, {nullable:true})
    translations?: RoleTranslationListRelationFilter;
}
