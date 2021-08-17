import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereUniqueInput } from './brand-where-unique.input'
import { BrandUpdateWithoutProductsInput } from './brand-update-without-products.input'
import { BrandCreateWithoutProductsInput } from './brand-create-without-products.input'

@InputType()
export class BrandUpsertWithWhereUniqueWithoutProductsInput {
    @Field(() => BrandWhereUniqueInput, { nullable: false })
    where!: BrandWhereUniqueInput

    @Field(() => BrandUpdateWithoutProductsInput, { nullable: false })
    update!: BrandUpdateWithoutProductsInput

    @Field(() => BrandCreateWithoutProductsInput, { nullable: false })
    create!: BrandCreateWithoutProductsInput
}
