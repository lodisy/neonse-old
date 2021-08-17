import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input'

@InputType()
export class BrandCreateOrConnectWithoutProductsInput {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput

    @Field(() => BrandCreateWithoutProductsInput, { nullable: false })
    create!: BrandCreateWithoutProductsInput
}
