import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { HideField } from '@nestjs/graphql'

@InputType()
export class ProductVariantOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    productId?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder

    @HideField()
    sku?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    images?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    brands?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    style?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    size?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    price?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    sale?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    stock?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    sold?: keyof typeof SortOrder
}
