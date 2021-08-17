import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'
import { ProductCategoryUpdateWithoutTypesInput } from './product-category-update-without-types.input'
import { ProductCategoryCreateWithoutTypesInput } from './product-category-create-without-types.input'

@InputType()
export class ProductCategoryUpsertWithWhereUniqueWithoutTypesInput {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput

    @Field(() => ProductCategoryUpdateWithoutTypesInput, { nullable: false })
    update!: ProductCategoryUpdateWithoutTypesInput

    @Field(() => ProductCategoryCreateWithoutTypesInput, { nullable: false })
    create!: ProductCategoryCreateWithoutTypesInput
}
