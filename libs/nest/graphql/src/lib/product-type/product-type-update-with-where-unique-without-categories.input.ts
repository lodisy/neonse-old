import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeUpdateWithoutCategoriesInput } from './product-type-update-without-categories.input'

@InputType()
export class ProductTypeUpdateWithWhereUniqueWithoutCategoriesInput {
    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput

    @Field(() => ProductTypeUpdateWithoutCategoriesInput, { nullable: false })
    data!: ProductTypeUpdateWithoutCategoriesInput
}
