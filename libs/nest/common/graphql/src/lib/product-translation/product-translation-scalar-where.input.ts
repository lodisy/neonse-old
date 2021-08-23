import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductTranslationScalarWhereInput {

    @Field(() => [ProductTranslationScalarWhereInput], {nullable:true})
    AND?: Array<ProductTranslationScalarWhereInput>;

    @Field(() => [ProductTranslationScalarWhereInput], {nullable:true})
    OR?: Array<ProductTranslationScalarWhereInput>;

    @Field(() => [ProductTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<ProductTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    discription?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;
}
