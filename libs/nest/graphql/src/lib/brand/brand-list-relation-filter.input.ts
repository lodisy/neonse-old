import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { BrandWhereInput } from './brand-where.input'

@InputType()
export class BrandListRelationFilter {
    @Field(() => BrandWhereInput, { nullable: true })
    every?: BrandWhereInput

    @Field(() => BrandWhereInput, { nullable: true })
    some?: BrandWhereInput

    @Field(() => BrandWhereInput, { nullable: true })
    none?: BrandWhereInput
}
