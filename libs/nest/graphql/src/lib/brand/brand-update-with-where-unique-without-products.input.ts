import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandUpdateWithoutProductsInput } from './brand-update-without-products.input'

@InputType()
export class BrandUpdateWithWhereUniqueWithoutProductsInput {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput

    @Field(() => BrandUpdateWithoutProductsInput, { nullable: false })
    data!: BrandUpdateWithoutProductsInput
}
