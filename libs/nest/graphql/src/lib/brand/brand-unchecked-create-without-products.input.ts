import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@InputType()
export class BrandUncheckedCreateWithoutProductsInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    name!: string

    @Field(() => String, { nullable: false })
    slug!: string

    @Field(() => String, { nullable: true })
    country?: string

    @Field(() => Int, { nullable: true })
    year?: number

    @Field(() => String, { nullable: true })
    description?: string
}
