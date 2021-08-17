import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'

@InputType()
export class ProductVariantWhereUniqueInput {
    @Field(() => String, { nullable: true })
    id?: string

    @HideField()
    sku?: string
}
