import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeCreateWithoutCategoriesInput } from './product-type-create-without-categories.input'

@InputType()
export class ProductTypeCreateOrConnectWithoutCategoriesInput {
    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput

    @Field(() => ProductTypeCreateWithoutCategoriesInput, { nullable: false })
    create!: ProductTypeCreateWithoutCategoriesInput
}
