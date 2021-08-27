import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Product } from '../product/product.model';
import { ProductType } from '../product-type/product-type.model';
import { ProductCategoryTranslation } from '../product-category-translation/product-category-translation.model';
import { LanguageCode } from '../prisma/language-code.enum';

/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
/** 商品种类 */
@ObjectType({description:'商品种类'})
export class ProductCategory {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    slug!: string;
    @Field(() => String, {nullable:true})
    parentId!: string | null;
    @Field(() => ProductCategory, {nullable:true})
    parent?: ProductCategory;
    @Field(() => [ProductCategory], {nullable:true})
    children?: Array<ProductCategory>;
    @Field(() => [Product], {nullable:true})
    products?: Array<Product>;
    @Field(() => [ProductType], {nullable:true})
    types?: Array<ProductType>;
    @Field(() => [ProductCategoryTranslation], {nullable:true})
    translations?: Array<ProductCategoryTranslation>;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}
