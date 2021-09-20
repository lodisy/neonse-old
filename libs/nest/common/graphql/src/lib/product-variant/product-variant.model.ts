import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { File } from '../file/file.model';
import { ProductVariantSize } from '../product-variant-size/product-variant-size.model';
import { ProductVariantColor } from '../product-variant-color/product-variant-color.model';
import { ProductVariantStyle } from '../product-variant-style/product-variant-style.model';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { Int } from '@nestjs/graphql';
import { Channel } from '../channel/channel.model';
import { Product } from '../product/product.model';
import { GraphQLJSON } from 'graphql-type-json';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantTranslation } from '../product-variant-translation/product-variant-translation.model';
import { ProductVariantCount } from '../product/product-variant-count.output';

/** 子商品 */
@ObjectType({description:'子商品'})
export class ProductVariant {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => [File], {nullable:true})
    assets?: Array<File>;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => ProductVariantSize, {nullable:true})
    size?: ProductVariantSize;

    @Field(() => ProductVariantColor, {nullable:true})
    color?: ProductVariantColor;

    @Field(() => ProductVariantStyle, {nullable:true})
    style?: ProductVariantStyle;

    @Field(() => CurrencyCode, {nullable:false,defaultValue:'USD'})
    currencyCode!: keyof typeof CurrencyCode;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    sale!: number | null;

    @Field(() => Int, {nullable:true,defaultValue:1})
    stock!: number | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sold!: number;

    @Field(() => [Channel], {nullable:true})
    channels?: Array<Channel>;

    @Field(() => Boolean, {nullable:true,defaultValue:false})
    draft!: boolean | null;

    /** 删除 product 时也会删除对应 product variant */
    @Field(() => Product, {nullable:false,description:'删除 product 时也会删除对应 product variant'})
    product?: Product;

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => [ProductVariantTranslation], {nullable:true})
    translations?: Array<ProductVariantTranslation>;

    @Field(() => ProductVariantCount, {nullable:true})
    _count?: ProductVariantCount;
}
