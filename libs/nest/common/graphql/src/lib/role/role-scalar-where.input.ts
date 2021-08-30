import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';

@InputType()
export class RoleScalarWhereInput {

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    AND?: Array<RoleScalarWhereInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    OR?: Array<RoleScalarWhereInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    NOT?: Array<RoleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    enabled?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    isDefault?: BoolNullableFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;
}
