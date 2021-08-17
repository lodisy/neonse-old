import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryCreateWithoutTypesInput } from './product-category-create-without-types.input'

@InputType()
export class ProductCategoryCreateOrConnectWithoutTypesInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryCreateWithoutTypesInput, { nullable: false })
    create!: ProductCategoryCreateWithoutTypesInput
}
