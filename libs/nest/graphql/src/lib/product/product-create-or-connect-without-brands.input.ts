import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductCreateWithoutBrandsInput } from './product-create-without-brands.input'

@InputType()
export class ProductCreateOrConnectWithoutBrandsInput {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductCreateWithoutBrandsInput, { nullable: false })
    create!: ProductCreateWithoutBrandsInput
}
