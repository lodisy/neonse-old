import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'
import { ProductCreateInput } from './product-create.input'
import { ProductUpdateInput } from './product-update.input'

@ArgsType()
export class UpsertOneProductArgs {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput

    @Field(() => ProductCreateInput, { nullable: false })
    create!: ProductCreateInput

    @Field(() => ProductUpdateInput, { nullable: false })
    update!: ProductUpdateInput
}
