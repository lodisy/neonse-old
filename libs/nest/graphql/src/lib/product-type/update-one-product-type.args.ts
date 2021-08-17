import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductTypeUpdateInput } from './product-type-update.input'
import { ProductTypeWhereUniqueInput } from './product-type-where-unique.input'

@ArgsType()
export class UpdateOneProductTypeArgs {
    @Field(() => ProductTypeUpdateInput, { nullable: false })
    data!: ProductTypeUpdateInput

    @Field(() => ProductTypeWhereUniqueInput, { nullable: false })
    where!: ProductTypeWhereUniqueInput
}
