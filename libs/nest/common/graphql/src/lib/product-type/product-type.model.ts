import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductCategory } from '../product-category/product-category.model';
import { ProductTypeTranslation } from '../product-type-translation/product-type-translation.model';
import { LanguageCode } from '../prisma/language-code.enum';

/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
/** 商品分类（男装、女装等） */
@ObjectType({description:'商品分类（男装、女装等）'})
export class ProductType {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => [ProductCategory], {nullable:true})
    categories?: Array<ProductCategory>;
    @Field(() => [ProductTypeTranslation], {nullable:true})
    translations?: Array<ProductTypeTranslation>;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}
