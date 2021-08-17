import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { ProductTypeWhereInput } from './product-type-where.input'

@InputType()
export class ProductTypeListRelationFilter {
    @Field(() => ProductTypeWhereInput, { nullable: true })
    every?: ProductTypeWhereInput

    @Field(() => ProductTypeWhereInput, { nullable: true })
    some?: ProductTypeWhereInput

    @Field(() => ProductTypeWhereInput, { nullable: true })
    none?: ProductTypeWhereInput
}
