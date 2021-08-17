import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductWhereInput } from './product-where.input'
import { ProductOrderByInput } from './product-order-by.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { Int } from '@nestjs/graphql'
import { ProductScalarFieldEnum } from './product-scalar-field.enum'

@ArgsType()
export class FindFirstProductArgs {
    @Field(() => ProductWhereInput, { nullable: true })
    where?: ProductWhereInput

    @Field(() => [ProductOrderByInput], { nullable: true })
    orderBy?: Array<ProductOrderByInput>

    @Field(() => ProductWhereUniqueInput, { nullable: true })
    cursor?: ProductWhereUniqueInput

    @Field(() => Int, { nullable: true })
    take?: number

    @Field(() => Int, { nullable: true })
    skip?: number

    @Field(() => [ProductScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ProductScalarFieldEnum>
}
