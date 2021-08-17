import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductVariantWhereUniqueInput } from './product-variant-where-unique.input'

@ArgsType()
export class DeleteOneProductVariantArgs {
    @Field(() => ProductVariantWhereUniqueInput, { nullable: false })
    where!: ProductVariantWhereUniqueInput
}
