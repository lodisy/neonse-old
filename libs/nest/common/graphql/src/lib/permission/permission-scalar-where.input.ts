import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumActionFilter } from '../prisma/enum-action-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class PermissionScalarWhereInput {

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    AND?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    OR?: Array<PermissionScalarWhereInput>;

    @Field(() => [PermissionScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;
}
