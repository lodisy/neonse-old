import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class RoleTranslationScalarWhereInput {

    @Field(() => [RoleTranslationScalarWhereInput], {nullable:true})
    AND?: Array<RoleTranslationScalarWhereInput>;

    @Field(() => [RoleTranslationScalarWhereInput], {nullable:true})
    OR?: Array<RoleTranslationScalarWhereInput>;

    @Field(() => [RoleTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<RoleTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    roleId?: StringNullableFilter;
}
