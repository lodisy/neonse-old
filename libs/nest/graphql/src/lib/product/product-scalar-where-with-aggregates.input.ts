import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input'
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input'
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input'
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input'

@InputType()
export class ProductScalarWhereWithAggregatesInput {
    @Field(() => [ProductScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<ProductScalarWhereWithAggregatesInput>

    @Field(() => [ProductScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<ProductScalarWhereWithAggregatesInput>

    @Field(() => [ProductScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<ProductScalarWhereWithAggregatesInput>

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    sku?: StringWithAggregatesFilter

    @Field(() => StringNullableListFilter, { nullable: true })
    images?: StringNullableListFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    discription?: StringWithAggregatesFilter

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    price?: IntWithAggregatesFilter

    @Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
    featured?: BoolNullableWithAggregatesFilter

    @Field(() => BoolNullableWithAggregatesFilter, { nullable: true })
    draft?: BoolNullableWithAggregatesFilter

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    stock?: IntWithAggregatesFilter

    @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
    sold?: IntNullableWithAggregatesFilter

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    createdAt?: DateTimeWithAggregatesFilter

    @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
    updatedAt?: DateTimeNullableWithAggregatesFilter
}
