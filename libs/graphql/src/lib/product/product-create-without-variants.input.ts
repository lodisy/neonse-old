import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ProductCreateimagesInput } from '../prisma/product-createimages.input';
import { BrandCreateNestedManyWithoutProductsInput } from '../brand/brand-create-nested-many-without-products.input';
import { ProductTypeCreateNestedManyWithoutProductsInput } from '../product-type/product-type-create-nested-many-without-products.input';
import { ProductCategoryCreateNestedManyWithoutProductsInput } from '../product-category/product-category-create-nested-many-without-products.input';
import { ReviewCreateNestedManyWithoutForInput } from '../review/review-create-nested-many-without-for.input';
import { LikeCreateNestedManyWithoutProductInput } from '../like/like-create-nested-many-without-product.input';

@InputType()
export class ProductCreateWithoutVariantsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    sku!: string;

    @Field(() => String, {nullable:false})
    discription!: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProductCreateimagesInput, {nullable:true})
    images?: ProductCreateimagesInput;

    @Field(() => BrandCreateNestedManyWithoutProductsInput, {nullable:true})
    brands?: BrandCreateNestedManyWithoutProductsInput;

    @Field(() => ProductTypeCreateNestedManyWithoutProductsInput, {nullable:true})
    types?: ProductTypeCreateNestedManyWithoutProductsInput;

    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, {nullable:true})
    categories?: ProductCategoryCreateNestedManyWithoutProductsInput;

    @Field(() => ReviewCreateNestedManyWithoutForInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutForInput;

    @Field(() => LikeCreateNestedManyWithoutProductInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutProductInput;
}
