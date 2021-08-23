import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCode } from '../prisma/currency-code.enum';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import * as Validator from 'class-validator';
import { LanguageCode } from '../prisma/language-code.enum';
import { FileUncheckedCreateNestedManyWithoutProductVariantInput } from '../file/file-unchecked-create-nested-many-without-product-variant.input';
import { ProductVariantSizeUncheckedCreateNestedOneWithoutProductVariantInput } from '../product-variant-size/product-variant-size-unchecked-create-nested-one-without-product-variant.input';
import { ProductVariantStyleUncheckedCreateNestedOneWithoutProductVariantInput } from '../product-variant-style/product-variant-style-unchecked-create-nested-one-without-product-variant.input';
import { ChannelUncheckedCreateNestedManyWithoutProductVariantInput } from '../channel/channel-unchecked-create-nested-many-without-product-variant.input';
import { ProductVariantTranslationUncheckedCreateNestedManyWithoutProductVariantInput } from '../product-variant-translation/product-variant-translation-unchecked-create-nested-many-without-product-variant.input';

@InputType()
export class ProductVariantUncheckedCreateWithoutColorInput {

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

    @Field(() => String, {nullable:false})
    productId!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => FileUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    assets?: FileUncheckedCreateNestedManyWithoutProductVariantInput;

    @Field(() => ProductVariantSizeUncheckedCreateNestedOneWithoutProductVariantInput, {nullable:true})
    size?: ProductVariantSizeUncheckedCreateNestedOneWithoutProductVariantInput;

    @Field(() => ProductVariantStyleUncheckedCreateNestedOneWithoutProductVariantInput, {nullable:true})
    style?: ProductVariantStyleUncheckedCreateNestedOneWithoutProductVariantInput;

    @Field(() => ChannelUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    channels?: ChannelUncheckedCreateNestedManyWithoutProductVariantInput;

    @Field(() => ProductVariantTranslationUncheckedCreateNestedManyWithoutProductVariantInput, {nullable:true})
    translations?: ProductVariantTranslationUncheckedCreateNestedManyWithoutProductVariantInput;
}
