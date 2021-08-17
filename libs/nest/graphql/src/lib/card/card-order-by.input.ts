import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { SortOrder } from '../prisma/sort-order.enum'
import { HideField } from '@nestjs/graphql'

@InputType()
export class CardOrderByInput {
    @HideField()
    id?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    profileId?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    number?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    expiration?: keyof typeof SortOrder

    @Field(() => SortOrder, { nullable: true })
    bank?: keyof typeof SortOrder
}
