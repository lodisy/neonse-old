import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class ProductCategoryOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    slug?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    parentId?: keyof typeof SortOrder
}
