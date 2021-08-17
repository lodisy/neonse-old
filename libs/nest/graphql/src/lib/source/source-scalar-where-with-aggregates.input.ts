import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { HideField } from '@nestjs/graphql'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'

@InputType()
export class SourceScalarWhereWithAggregatesInput {
    @Field(() => [SourceScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<SourceScalarWhereWithAggregatesInput>

    @Field(() => [SourceScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<SourceScalarWhereWithAggregatesInput>

    @Field(() => [SourceScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<SourceScalarWhereWithAggregatesInput>

    @HideField()
    id?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    link?: StringNullableWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    fileId?: StringWithAggregatesFilter
}
