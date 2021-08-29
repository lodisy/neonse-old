import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { ProductVariantColorTranslation } from '../product-variant-color-translation/product-variant-color-translation.model';
import { ProductVariant } from '../product-variant/product-variant.model';

/** 商品颜色 */
@ObjectType({description:'商品颜色'})
export class ProductVariantColor {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    name!: string;

    /** 颜色代码 HEX */
    @Field(() => String, {nullable:false,description:'颜色代码 HEX'})
    value!: string;

    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;

    @Field(() => [ProductVariantColorTranslation], {nullable:true})
    translations?: Array<ProductVariantColorTranslation>;

    @Field(() => ProductVariant, {nullable:true})
    productVariant?: ProductVariant;

    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
}
