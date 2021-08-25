import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { Brand } from '../brand/brand.model';
import { ProductType } from '../product-type/product-type.model';
import { ProductCategory } from '../product-category/product-category.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { Int } from '@nestjs/graphql';
import { Like } from '../like/like.model';
import { Review } from '../review/review.model';
import { ProductTranslation } from '../product-translation/product-translation.model';
import { LanguageCode } from '../prisma/language-code.enum';

/** 商品 */
/** 商品 */
/** 商品 */
/** 商品 */
/** 商品 */
/** 商品 */
/** 商品 */
/** 商品 */
@ObjectType({description:'商品'})
export class Product {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    sku!: string;
    @Field(() => [File], {nullable:true})
    assets?: Array<File>;
    @Field(() => [Brand], {nullable:true})
    brands?: Array<Brand>;
    @Field(() => [ProductType], {nullable:true})
    types?: Array<ProductType>;
    @Field(() => [ProductCategory], {nullable:true})
    categories?: Array<ProductCategory>;
    @Field(() => [ProductVariant], {nullable:true})
    variants?: Array<ProductVariant>;
    @Field(() => String, {nullable:true})
    discription!: string | null;
    @Field(() => Int, {nullable:false})
    price!: number;
    @Field(() => Boolean, {nullable:true,defaultValue:false})
    featured!: boolean | null;
    @Field(() => Boolean, {nullable:true,defaultValue:true})
    draft!: boolean | null;
    @Field(() => Int, {nullable:false})
    stock!: number;
    @Field(() => Int, {nullable:true,defaultValue:0})
    sold!: number | null;
    @Field(() => [Like], {nullable:true})
    likes?: Array<Like>;
    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => [ProductTranslation], {nullable:true})
    translations?: Array<ProductTranslation>;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}
