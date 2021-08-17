import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeUpdateWithoutCategoriesInput } from './product-type-update-without-categories.input'
import { ProductTypeCreateWithoutCategoriesInput } from './product-type-create-without-categories.input'

@InputType()
export class ProductTypeUpsertWithWhereUniqueWithoutCategoriesInput {
    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput

    @Field(() => ProductTypeUpdateWithoutCategoriesInput, { nullable: false })
    update!: ProductTypeUpdateWithoutCategoriesInput

    @Field(() => ProductTypeCreateWithoutCategoriesInput, { nullable: false })
    create!: ProductTypeCreateWithoutCategoriesInput
}
