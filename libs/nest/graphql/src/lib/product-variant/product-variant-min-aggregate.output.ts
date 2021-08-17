import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { Size } from '../prisma/size.enum'
import { Int } from '@nestjs/graphql'

@ObjectType()
export class ProductVariantMinAggregate {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: true })
    productId?: string

    @Field(() => String, { nullable: true })
    name?: string

    @Field(() => String, { nullable: true })
    sku?: string

    @Field(() => String, { nullable: true })
    brands?: string

    @Field(() => String, { nullable: true })
    style?: string

    @Field(() => Size, { nullable: true })
    size?: keyof typeof Size

    @Field(() => Int, { nullable: true })
    price?: number

    @Field(() => Int, { nullable: true })
    sale?: number

    @Field(() => Int, { nullable: true })
    stock?: number

    @Field(() => Int, { nullable: true })
    sold?: number
}
