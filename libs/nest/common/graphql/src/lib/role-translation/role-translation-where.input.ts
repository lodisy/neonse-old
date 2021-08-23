import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class RoleTranslationWhereInput {

    @Field(() => [RoleTranslationWhereInput], {nullable:true})
    AND?: Array<RoleTranslationWhereInput>;

    @Field(() => [RoleTranslationWhereInput], {nullable:true})
    OR?: Array<RoleTranslationWhereInput>;

    @Field(() => [RoleTranslationWhereInput], {nullable:true})
    NOT?: Array<RoleTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    Role?: RoleRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roleId?: StringNullableFilter;
}
