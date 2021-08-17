import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class BrandOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    slug?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    country?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    year?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    description?: keyof typeof SortOrder
}
