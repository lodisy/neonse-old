import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { ProductCategoryRelationFilter } from './product-category-relation-filter.input';
import { ProductCategoryListRelationFilter } from './product-category-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { ProductTypeListRelationFilter } from '../product-type/product-type-list-relation-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductCategoryTranslationListRelationFilter } from '../product-category-translation/product-category-translation-list-relation-filter.input';

@InputType()
export class ProductCategoryWhereInput {

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    AND?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    OR?: Array<ProductCategoryWhereInput>;

    @Field(() => [ProductCategoryWhereInput], {nullable:true})
    NOT?: Array<ProductCategoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    parentId?: StringNullableFilter;

    @Field(() => ProductCategoryRelationFilter, {nullable:true})
    parent?: ProductCategoryRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    children?: ProductCategoryListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => ProductTypeListRelationFilter, {nullable:true})
    types?: ProductTypeListRelationFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ProductCategoryTranslationListRelationFilter, {nullable:true})
    translations?: ProductCategoryTranslationListRelationFilter;
}
