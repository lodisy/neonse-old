import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithoutParentInput } from './product-category-update-without-parent.input'
import { ProductCategoryCreateWithoutParentInput } from './product-category-create-without-parent.input'

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutParentInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryUpdateWithoutParentInput, { nullable: false })
    update!: ProductCategoryUpdateWithoutParentInput

    @Field(() => ProductCategoryCreateWithoutParentInput, { nullable: false })
    create!: ProductCategoryCreateWithoutParentInput
}
