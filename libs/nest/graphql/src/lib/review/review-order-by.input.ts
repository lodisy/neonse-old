import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class ReviewOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    profileId?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    productId?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    rate?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    description?: keyof typeof SortOrder
}
