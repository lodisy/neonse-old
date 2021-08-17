import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ProductMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    sku?: string

    @Field(() => String, { nullable: true })
    discription?: string

    @Field(() => Int, { nullable: true })
    price?: number

    @Field(() => Boolean, { nullable: true })
    featured?: boolean

    @Field(() => Boolean, { nullable: true })
    draft?: boolean

    @Field(() => Int, { nullable: true })
    stock?: number

    @Field(() => Int, { nullable: true })
    sold?: number

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string
}
