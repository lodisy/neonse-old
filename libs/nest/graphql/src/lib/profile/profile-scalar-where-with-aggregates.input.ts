import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { HideField } from '@nestjs/graphql'
import { BigIntNullableWithAggregatesFilter } from '../prisma/big-int-nullable-with-aggregates-filter.input'
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input'

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
    @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<ProfileScalarWhereWithAggregatesInput>

    @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<ProfileScalarWhereWithAggregatesInput>

    @Field(() => [ProfileScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>

    @HideField()
    id?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    userId?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter

    @Field(() => BigIntNullableWithAggregatesFilter, { nullable: true })
    phone?: BigIntNullableWithAggregatesFilter

    @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
    point?: IntNullableWithAggregatesFilter

    @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
    level?: IntNullableWithAggregatesFilter
}
