import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeUpdateWithoutProductsInput } from './product-type-update-without-products.input'
import { ProductTypeCreateWithoutProductsInput } from './product-type-create-without-products.input'

@InputType()
export class ProductTypeUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput

    @Field(() => ProductTypeUpdateWithoutProductsInput, { nullable: false })
    update!: ProductTypeUpdateWithoutProductsInput

    @Field(() => ProductTypeCreateWithoutProductsInput, { nullable: false })
    create!: ProductTypeCreateWithoutProductsInput
}
