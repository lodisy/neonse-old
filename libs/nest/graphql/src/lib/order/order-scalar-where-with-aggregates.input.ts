import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'

@InputType()
export class OrderScalarWhereWithAggregatesInput {
    @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<OrderScalarWhereWithAggregatesInput>

    @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<OrderScalarWhereWithAggregatesInput>

    @Field(() => [OrderScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<OrderScalarWhereWithAggregatesInput>

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter
}
