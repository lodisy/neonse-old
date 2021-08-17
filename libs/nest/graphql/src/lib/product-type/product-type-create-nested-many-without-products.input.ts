import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeCreateWithoutProductsInput } from './product-type-create-without-products.input'
import { ProductTypeCreateOrConnectWithoutProductsInput } from './product-type-create-or-connect-without-products.input'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'

@InputType()
export class ProductTypeCreateNestedManyWithoutProductsInput {
    @Field(() => [ProductTypeCreateWithoutProductsInput], { nullable: true })
    create?: Array<ProductTypeCreateWithoutProductsInput>

    @Field(() => [ProductTypeCreateOrConnectWithoutProductsInput], { nullable: true })
    connectOrCreate?: Array<ProductTypeCreateOrConnectWithoutProductsInput>

    @Field(() => [ProductTypeWhereUniqueInput], { nullable: true })
    connect?: Array<ProductTypeWhereUniqueInput>
}
