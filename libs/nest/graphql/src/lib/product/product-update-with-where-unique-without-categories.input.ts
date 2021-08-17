import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductUpdateWithoutCategoriesInput } from './product-update-without-categories.input'

@InputType()
export class ProductUpdateWithWhereUniqueWithoutCategoriesInput {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductUpdateWithoutCategoriesInput, { nullable: false })
    data!: ProductUpdateWithoutCategoriesInput
}
