import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductCategory } from '../product-category/product-category.model';

@ObjectType()
export class ProductType {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => [ProductCategory], {nullable:true})
    categories?: Array<ProductCategory>;
}
