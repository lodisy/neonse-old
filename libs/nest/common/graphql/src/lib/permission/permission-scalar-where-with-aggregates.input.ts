import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumActionWithAggregatesFilter } from '../prisma/enum-action-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumActionWithAggregatesFilter, {nullable:true})
    action?: EnumActionWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subject?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    fields?: StringNullableListFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    conditions?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    inverted?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    reason?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;
}
