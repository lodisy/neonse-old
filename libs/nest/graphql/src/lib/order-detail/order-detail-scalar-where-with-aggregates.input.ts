import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'

@InputType()
export class OrderDetailScalarWhereWithAggregatesInput {
    @Field(() => [OrderDetailScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<OrderDetailScalarWhereWithAggregatesInput>

    @Field(() => [OrderDetailScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<OrderDetailScalarWhereWithAggregatesInput>

    @Field(() => [OrderDetailScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<OrderDetailScalarWhereWithAggregatesInput>

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter
}
