import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductCategoryWhereInput } from './product-category-where.input'

@InputType()
export class ProductCategoryListRelationFilter {
    @Field(() => ProductCategoryWhereInput, { nullable: true })
    every?: ProductCategoryWhereInput

    @Field(() => ProductCategoryWhereInput, { nullable: true })
    some?: ProductCategoryWhereInput

    @Field(() => ProductCategoryWhereInput, { nullable: true })
    none?: ProductCategoryWhereInput
}
