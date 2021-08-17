import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryCreateNestedManyWithoutTypesInput } from '../product-category/product-category-create-nested-many-without-types.input'

@InputType()
export class ProductTypeCreateWithoutProductsInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => ProductCategoryCreateNestedManyWithoutTypesInput, { nullable: true })
    categories?: ProductCategoryCreateNestedManyWithoutTypesInput
}
