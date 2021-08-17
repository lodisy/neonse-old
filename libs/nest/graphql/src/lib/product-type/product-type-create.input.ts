import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCreateNestedManyWithoutTypesInput } from '../product/product-create-nested-many-without-types.input'
import { ProductCategoryCreateNestedManyWithoutTypesInput } from '../product-category/product-category-create-nested-many-without-types.input'

@InputType()
export class ProductTypeCreateInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => ProductCreateNestedManyWithoutTypesInput, { nullable: true })
    products?: ProductCreateNestedManyWithoutTypesInput

    @Field(() => ProductCategoryCreateNestedManyWithoutTypesInput, { nullable: true })
    categories?: ProductCategoryCreateNestedManyWithoutTypesInput
}
