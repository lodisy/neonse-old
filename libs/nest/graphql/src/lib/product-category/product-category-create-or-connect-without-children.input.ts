import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryCreateWithoutChildrenInput } from './product-category-create-without-children.input'

@InputType()
export class ProductCategoryCreateOrConnectWithoutChildrenInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryCreateWithoutChildrenInput, { nullable: false })
    create!: ProductCategoryCreateWithoutChildrenInput
}
