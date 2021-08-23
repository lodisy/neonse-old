import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantStyleTranslationScalarWhereInput {

    @Field(() => [ProductVariantStyleTranslationScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantStyleTranslationScalarWhereInput>;

    @Field(() => [ProductVariantStyleTranslationScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantStyleTranslationScalarWhereInput>;

    @Field(() => [ProductVariantStyleTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantStyleTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantStyleId?: StringNullableFilter;
}
