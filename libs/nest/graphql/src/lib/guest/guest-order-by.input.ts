import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'

@InputType()
export class GuestOrderByInput {
    @Field(() => SortOrder, { nullable: true })
    identifierToken?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    email?: keyof typeof SortOrder
}
