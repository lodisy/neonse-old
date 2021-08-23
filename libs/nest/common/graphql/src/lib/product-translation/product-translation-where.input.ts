import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProductRelationFilter } from '../product/product-relation-filter.input';

@InputType()
export class ProductTranslationWhereInput {

    @Field(() => [ProductTranslationWhereInput], {nullable:true})
    AND?: Array<ProductTranslationWhereInput>;

    @Field(() => [ProductTranslationWhereInput], {nullable:true})
    OR?: Array<ProductTranslationWhereInput>;

    @Field(() => [ProductTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    discription?: StringNullableFilter;

    @Field(() => ProductRelationFilter, {nullable:true})
    product?: ProductRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;
}
