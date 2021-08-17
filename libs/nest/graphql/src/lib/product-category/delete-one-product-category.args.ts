import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { ProductCategoryWhereUniqueInput } from './product-category-where-unique.input'

@ArgsType()
export class DeleteOneProductCategoryArgs {
    @Field(() => ProductCategoryWhereUniqueInput, { nullable: false })
    where!: ProductCategoryWhereUniqueInput
}
