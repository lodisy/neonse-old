import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'
import { ProductCreateimagesInput } from '../prisma/product-createimages.input'
import { ProductTypeCreateNestedManyWithoutProductsInput } from '../product-type/product-type-create-nested-many-without-products.input'
import { ProductCategoryCreateNestedManyWithoutProductsInput } from '../product-category/product-category-create-nested-many-without-products.input'
import { ProductVariantCreateNestedManyWithoutProductInput } from '../product-variant/product-variant-create-nested-many-without-product.input'
import { ReviewCreateNestedManyWithoutForInput } from '../review/review-create-nested-many-without-for.input'
import { LikeCreateNestedManyWithoutProductInput } from '../like/like-create-nested-many-without-product.input'

@InputType()
export class ProductCreateWithoutBrandsInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    sku!: string

    @Field(() => String, { nullable: false })
    discription!: string

    @Field(() => Int, { nullable: false })
    price!: number

    @Field(() => Boolean, { nullable: true })
    featured?: boolean

    @Field(() => Boolean, { nullable: true })
    draft?: boolean

    @Field(() => Int, { nullable: false })
    stock!: number

    @Field(() => Int, { nullable: true })
    sold?: number

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string

    @Field(() => ProductCreateimagesInput, { nullable: true })
    images?: ProductCreateimagesInput

    @Field(() => ProductTypeCreateNestedManyWithoutProductsInput, { nullable: true })
    types?: ProductTypeCreateNestedManyWithoutProductsInput

    @Field(() => ProductCategoryCreateNestedManyWithoutProductsInput, { nullable: true })
    categories?: ProductCategoryCreateNestedManyWithoutProductsInput

    @Field(() => ProductVariantCreateNestedManyWithoutProductInput, { nullable: true })
    variants?: ProductVariantCreateNestedManyWithoutProductInput

    @Field(() => ReviewCreateNestedManyWithoutForInput, { nullable: true })
    reviews?: ReviewCreateNestedManyWithoutForInput

    @Field(() => LikeCreateNestedManyWithoutProductInput, { nullable: true })
    likes?: LikeCreateNestedManyWithoutProductInput
}
