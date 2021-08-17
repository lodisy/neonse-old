import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class BrandMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    slug?: string

    @Field(() => String, { nullable: true })
    country?: string

    @Field(() => Int, { nullable: true })
    year?: number

    @Field(() => String, { nullable: true })
    description?: string
}
