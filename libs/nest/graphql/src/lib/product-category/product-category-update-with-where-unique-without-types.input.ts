import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithoutTypesInput } from './product-category-update-without-types.input'

@InputType()
export class ProductCategoryUpdateWithWhereUniqueWithoutTypesInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryUpdateWithoutTypesInput, { nullable: false })
    data!: ProductCategoryUpdateWithoutTypesInput
}
