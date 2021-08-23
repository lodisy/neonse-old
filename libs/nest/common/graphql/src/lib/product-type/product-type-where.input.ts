import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { ProductCategoryListRelationFilter } from '../product-category/product-category-list-relation-filter.input';
import { EnumLanguageCodeFilter } from '../prisma/enum-language-code-filter.input';
import { ProductTypeTranslationListRelationFilter } from '../product-type-translation/product-type-translation-list-relation-filter.input';

@InputType()
export class ProductTypeWhereInput {

    @Field(() => [ProductTypeWhereInput], {nullable:true})
    AND?: Array<ProductTypeWhereInput>;

    @Field(() => [ProductTypeWhereInput], {nullable:true})
    OR?: Array<ProductTypeWhereInput>;

    @Field(() => [ProductTypeWhereInput], {nullable:true})
    NOT?: Array<ProductTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    categories?: ProductCategoryListRelationFilter;

    @Field(() => EnumLanguageCodeFilter, {nullable:true})
    languageCode?: EnumLanguageCodeFilter;

    @Field(() => ProductTypeTranslationListRelationFilter, {nullable:true})
    translations?: ProductTypeTranslationListRelationFilter;
}
