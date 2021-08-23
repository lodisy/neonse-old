import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LanguageCode } from '../prisma/language-code.enum';
import { FileCreateNestedManyWithoutProductInput } from '../file/file-create-nested-many-without-product.input';
import { BrandCreateNestedManyWithoutProductsInput } from '../brand/brand-create-nested-many-without-products.input';
import { ProductTypeCreateNestedManyWithoutProductsInput } from '../product-type/product-type-create-nested-many-without-products.input';
import { ProductCategoryCreateNestedManyWithoutProductsInput } from '../product-category/product-category-create-nested-many-without-products.input';
import { ProductVariantCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-create-nested-many-without-product.input';
import { ReviewCreateNestedManyWithoutProductInput } from '../review/review-create-nested-many-without-product.input';
import { ProductTranslationCreateNestedManyWithoutProductInput } from '../product-translation/product-translation-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutLikesInput {

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

    @Field(() => String, {nullable:true})
    discription?: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Boolean, {nullable:true})
    featured?: boolean;

    @Field(() => Boolean, {nullable:true})
    draft?: boolean;

    @Field(() => Int, {nullable:false})
    stock!: number;

    @Field(() => Int, {nullable:true})
    sold?: number;

    @Field(() => LanguageCode, {nullable:true})
    languageCode?: keyof typeof LanguageCode;

    @Field(() => FileCreateNestedManyWithoutProductInput, {nullable:true})
    assets?: FileCreateNestedManyWithoutProductInput;

    @Field(() => BrandCreateNestedManyWithoutProductsInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutProductsInput;

    @Field(() => ProductTypeCreateNestedManyWithoutProductsInput, {nullable:true})
    types?: ProductTypeCreateNestedManyWithoutProductsInput;

    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    categories?: ProductCategoryCreateNestedManyWithoutProductsInput;

    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, {nullable:true})
    variants?: ProductVariantCreateNestedManyWithoutProductInput;

    @Field(() => ReviewCreateNestedManyWithoutProductInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutProductInput;

    @Field(() => ProductTranslationCreateNestedManyWithoutProductInput, {nullable:true})
    translations?: ProductTranslationCreateNestedManyWithoutProductInput;
}
