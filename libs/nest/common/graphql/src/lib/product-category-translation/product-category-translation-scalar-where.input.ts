import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductCategoryTranslationScalarWhereInput {

    @Field(() => [ProductCategoryTranslationScalarWhereInput], {nullable:true})
    AND?: Array<ProductCategoryTranslationScalarWhereInput>;

    @Field(() => [ProductCategoryTranslationScalarWhereInput], {nullable:true})
    OR?: Array<ProductCategoryTranslationScalarWhereInput>;

    @Field(() => [ProductCategoryTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productCategoryId?: StringNullableFilter;
}
