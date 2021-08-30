import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { EnumLanguageCodeWithAggregatesFilter } from '../prisma/enum-language-code-with-aggregates-filter.input';

@InputType()
export class RoleScalarWhereWithAggregatesInput {

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => [RoleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RoleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    userId?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    enabled?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    isDefault?: BoolNullableWithAggregatesFilter;

    @Field(() => EnumLanguageCodeWithAggregatesFilter, {nullable:true})
    languageCode?: EnumLanguageCodeWithAggregatesFilter;
}
