import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryUpdateWithoutChildrenInput } from './product-category-update-without-children.input'
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input'

@InputType()
export class ProductCategoryUpsertWithoutChildrenInput {
    @Field(() => ProductCategoryUpdateWithoutChildrenInput, { nullable: false })
    update!: ProductCategoryUpdateWithoutChildrenInput

    @Field(() => ProductCategoryCreateWithoutChildrenInput, { nullable: false })
    create!: ProductCategoryCreateWithoutChildrenInput
}
