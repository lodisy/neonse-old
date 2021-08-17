import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateNestedManyWithoutParentInput } from './product-category-create-nested-many-without-parent.input'
import { ProductCreateNestedManyWithoutCategoriesInput } from '../product/product-create-nested-many-without-categories.input'
import { ProductTypeCreateNestedManyWithoutCategoriesInput } from '../product-type/product-type-create-nested-many-without-categories.input'

@InputType()
export class ProductCategoryCreateWithoutParentInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => ProductCategoryCreateNestedManyWithoutParentInput, { nullable: true })
    children?: ProductCategoryCreateNestedManyWithoutParentInput

    @Field(() => ProductCreateNestedManyWithoutCategoriesInput, { nullable: true })
    products?: ProductCreateNestedManyWithoutCategoriesInput

    @Field(() => ProductTypeCreateNestedManyWithoutCategoriesInput, { nullable: true })
    types?: ProductTypeCreateNestedManyWithoutCategoriesInput
}
