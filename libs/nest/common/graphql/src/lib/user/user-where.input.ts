import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { RoleListRelationFilter } from '../role/role-list-relation-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { AuthenticationMethodListRelationFilter } from '../authentication-method/authentication-method-list-relation-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    username?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isEmailConfirmed?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isMobileConfirmed?: BoolNullableFilter;

    @Field(() => RoleListRelationFilter, {nullable:true})
    roles?: RoleListRelationFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLoginAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastLogoutAt?: DateTimeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;

    @Field(() => AuthenticationMethodListRelationFilter, {nullable:true})
    authenticationMethods?: AuthenticationMethodListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    accessToken?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refreshToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    resetPasswordToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    identifierToken?: StringNullableFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;
}
