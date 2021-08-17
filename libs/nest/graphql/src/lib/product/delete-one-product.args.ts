import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductWhereUniqueInput } from './product-where-unique.input'

@ArgsType()
export class DeleteOneProductArgs {
    @Field(() => ProductWhereUniqueInput, { nullable: false })
    where!: ProductWhereUniqueInput
}
