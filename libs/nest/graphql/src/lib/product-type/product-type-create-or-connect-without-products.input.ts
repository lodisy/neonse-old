import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'
import { ProductTypeCreateWithoutProductsInput } from './product-type-create-without-products.input'

@InputType()
export class ProductTypeCreateOrConnectWithoutProductsInput {
    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput

    @Field(() => ProductTypeCreateWithoutProductsInput, { nullable: false })
    create!: ProductTypeCreateWithoutProductsInput
}
