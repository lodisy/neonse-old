import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductUpdateInput } from './product-update.input'
import { ProductWhereUniqueInput } from './product-where-unique.input'

@ArgsType()
export class UpdateOneProductArgs {
    @Field(() => ProductUpdateInput, { nullable: false })
    data!: ProductUpdateInput

    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput
}
