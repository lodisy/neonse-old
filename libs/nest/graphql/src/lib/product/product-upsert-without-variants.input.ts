import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductUpdateWithoutVariantsInput } from './product-update-without-variants.input'
import { ProductCreateWithoutVariantsInput } from './product-create-without-variants.input'

@InputType()
export class ProductUpsertWithoutVariantsInput {
    @Field(() => ProductUpdateWithoutVariantsInput, { nullable: false })
    update!: ProductUpdateWithoutVariantsInput

    @Field(() => ProductCreateWithoutVariantsInput, { nullable: false })
    create!: ProductCreateWithoutVariantsInput
}
