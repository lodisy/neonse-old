import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithoutParentInput } from './product-category-update-without-parent.input'

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutParentInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryUpdateWithoutParentInput, { nullable: false })
    data!: ProductCategoryUpdateWithoutParentInput
}
