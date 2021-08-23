import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductVariantTranslationScalarWhereInput {

    @Field(() => [ProductVariantTranslationScalarWhereInput], {nullable:true})
    AND?: Array<ProductVariantTranslationScalarWhereInput>;

    @Field(() => [ProductVariantTranslationScalarWhereInput], {nullable:true})
    OR?: Array<ProductVariantTranslationScalarWhereInput>;

    @Field(() => [ProductVariantTranslationScalarWhereInput], {nullable:true})
    NOT?: Array<ProductVariantTranslationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productVariantId?: StringNullableFilter;
}
