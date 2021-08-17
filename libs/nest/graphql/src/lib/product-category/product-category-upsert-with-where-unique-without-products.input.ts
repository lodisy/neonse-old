import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithoutProductsInput } from './product-category-update-without-products.input'
import { ProductCategoryCreateWithoutProductsInput } from './product-category-create-without-products.input'

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryUpdateWithoutProductsInput, { nullable: false })
    update!: ProductCategoryUpdateWithoutProductsInput

    @Field(() => ProductCategoryCreateWithoutProductsInput, { nullable: false })
    create!: ProductCategoryCreateWithoutProductsInput
}
