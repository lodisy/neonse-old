import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { HideField } from '@nestjs/graphql'
import { Size } from '../prisma/size.enum'
import { Int } from '@nestjs/graphql'
import { ProductVariantCreateManyimagesInput } from './product-variant-create-manyimages.input'

@InputType()
export class ProductVariantCreateManyInput {
    @Field(() => String, { nullable: true })
    id?: string

    @Field(() => String, { nullable: false })
    productId!: string

    @Field(() => String, { nullable: true })
    name?: string

    @HideField()
    sku!: string

    @Field(() => String, { nullable: false })
    brands!: string

    @Field(() => String, { nullable: false })
    style!: string

    @Field(() => Size, { nullable: false })
    size!: keyof typeof Size

    @Field(() => Int, { nullable: false })
    price!: number

    @Field(() => Int, { nullable: true })
    sale?: number

    @Field(() => Int, { nullable: true })
    stock?: number

    @Field(() => Int, { nullable: true })
    sold?: number

    @Field(() => ProductVariantCreateManyimagesInput, { nullable: true })
    images?: ProductVariantCreateManyimagesInput
}
