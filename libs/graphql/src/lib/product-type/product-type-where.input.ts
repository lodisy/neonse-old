import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { ProductCategoryListRelationFilter } from '../product-category/product-category-list-relation-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    products?: ProductListRelationFilter;

    @Field(() => ProductCategoryListRelationFilter, {nullable:true})
    categories?: ProductCategoryListRelationFilter;
}
