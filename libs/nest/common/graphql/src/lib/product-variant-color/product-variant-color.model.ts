import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProductVariantColorTranslation } from '../product-variant-color-translation/product-variant-color-translation.model';
import { ProductVariant } from '../product-variant/product-variant.model';
import { LanguageCode } from '../prisma/language-code.enum';

/** 商品颜色 */
@ObjectType({description:'商品颜色'})
export class ProductVariantColor {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    value!: string;
    @Field(() => [ProductVariantColorTranslation], {nullable:true})
    translations?: Array<ProductVariantColorTranslation>;
    @Field(() => ProductVariant, {nullable:true})
    productVariant?: ProductVariant;
    @Field(() => String, {nullable:true})
    productVariantId!: string | null;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => LanguageCode, {nullable:false,defaultValue:'en'})
    languageCode!: keyof typeof LanguageCode;
}
