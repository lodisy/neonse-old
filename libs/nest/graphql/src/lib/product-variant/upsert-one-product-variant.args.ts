import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input'
import { ProductVariantCreateInput } from './product-variant-create.input'
import { ProductVariantUpdateInput } from './product-variant-update.input'

@ArgsType()
export class UpsertOneProductVariantArgs {
    @Field(() => ProductVariantWhereUniqueInput, { nullable: false })
    where!: ProductVariantWhereUniqueInput

    @Field(() => ProductVariantCreateInput, { nullable: false })
    create!: ProductVariantCreateInput

    @Field(() => ProductVariantUpdateInput, { nullable: false })
    update!: ProductVariantUpdateInput
}
