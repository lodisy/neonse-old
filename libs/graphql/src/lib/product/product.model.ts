import { Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Brand } from '../brand/brand.model';
import { ProductCategory } from '../product-category/product-category.model';
import { ProductType } from '../product-type/product-type.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { Review } from '../review/review.model';
import { Like } from '../like/like.model';

@ObjectType()
export class Product {
    @Field(() => ID, { nullable: false })
    id!: string;
    @Field(() => String, { nullable: false })
    name!: string;
    @Field(() => String, { nullable: false })
    sku!: string;
    @Field(() => [String], { nullable: true })
    images!: Array<string>;
    @Field(() => [Brand], { nullable: true })
    brands?: Array<Brand>;
    @Field(() => [ProductType], { nullable: true })
    types?: Array<ProductType>;
    @Field(() => [ProductCategory], { nullable: true })
    categories?: Array<ProductCategory>;
    @Field(() => [ProductVariant], { nullable: true })
    variants?: Array<ProductVariant>;
    @Field(() => String, { nullable: false })
    discription!: string;
    @Field(() => Int, { nullable: false })
    price!: number;
    @Field(() => Boolean, { nullable: false })
    featured!: boolean;
    @Field(() => Int, { nullable: false })
    stock!: number;
    @Field(() => Int, { nullable: false })
    sold!: number;
    @Field(() => Date, { nullable: false })
    createdAt!: Date;
    @Field(() => Date, { nullable: true })
    updatedAt!: Date | null;
    @Field(() => Boolean, { nullable: true, defaultValue: true })
    draft!: boolean | null;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
}
