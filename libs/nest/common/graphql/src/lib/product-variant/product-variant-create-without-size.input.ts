import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';
import { LanguageCode } from '../prisma/language-code.enum';
import { FileCreateNestedManyWithoutProductVariantInput } from '../file/file-create-nested-many-without-product-variant.input';
import { ProductVariantColorCreateNestedOneWithoutProductVariantInput } from '../product-variant-color/product-variant-color-create-nested-one-without-product-variant.input';
import { ProductVariantStyleCreateNestedOneWithoutProductVariantInput } from '../product-variant-style/product-variant-style-create-nested-one-without-product-variant.input';
import { ChannelCreateNestedManyWithoutProductVariantInput } from '../channel/channel-create-nested-many-without-product-variant.input';
import { ProductCreateNestedOneWithoutVariantsInput } from '../product/product-create-nested-one-without-variants.input';
import { ProductVariantTranslationCreateNestedManyWithoutProductVariantInput } from '../product-variant-translation/product-variant-translation-create-nested-many-without-product-variant.input';

@InputType()
export class ProductVariantCreateWithoutSizeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    brands!: string;

    @Field(() => CurrencyCode, {nullable:true})
    currencyCode?: keyof typeof CurrencyCode;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:true})
    sale?: number;

    @Field(() => Int, {nullable:true})
    stock?: number;

    @Field(() => Int, {nullable:true})
    sold?: number;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => FileCreateNestedManyWithoutProductVariantInput, {nullable:true})
    assets?: FileCreateNestedManyWithoutProductVariantInput;

    @Field(() => ProductVariantColorCreateNestedOneWithoutProductVariantInput, {nullable:true})
    color?: ProductVariantColorCreateNestedOneWithoutProductVariantInput;

    @Field(() => ProductVariantStyleCreateNestedOneWithoutProductVariantInput, {nullable:true})
    style?: ProductVariantStyleCreateNestedOneWithoutProductVariantInput;

    @Field(() => ChannelCreateNestedManyWithoutProductVariantInput, {nullable:true})
    channels?: ChannelCreateNestedManyWithoutProductVariantInput;

    @Field(() => ProductCreateNestedOneWithoutVariantsInput, {nullable:false})
    product!: ProductCreateNestedOneWithoutVariantsInput;

    @Field(() => ProductVariantTranslationCreateNestedManyWithoutProductVariantInput, {nullable:true})
    translations?: ProductVariantTranslationCreateNestedManyWithoutProductVariantInput;
}
