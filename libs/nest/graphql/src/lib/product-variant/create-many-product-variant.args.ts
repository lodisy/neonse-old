import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductVariantCreateManyInput } from './product-variant-create-many.input'

@ArgsType()
export class CreateManyProductVariantArgs {
    @Field(() => [ProductVariantCreateManyInput], { nullable: false })
    data!: Array<ProductVariantCreateManyInput>

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean
}
