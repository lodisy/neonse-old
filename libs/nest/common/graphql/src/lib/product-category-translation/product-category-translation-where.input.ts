import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductCategoryRelationFilter } from '../product-category/product-category-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ProductCategoryTranslationWhereInput {

    @Field(() => [ProductCategoryTranslationWhereInput], {nullable:true})
    AND?: Array<ProductCategoryTranslationWhereInput>;

    @Field(() => [ProductCategoryTranslationWhereInput], {nullable:true})
    OR?: Array<ProductCategoryTranslationWhereInput>;

    @Field(() => [ProductCategoryTranslationWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryTranslationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => ProductCategoryRelationFilter, {nullable:true})
    productCategory?: ProductCategoryRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productCategoryId?: StringNullableFilter;
}
