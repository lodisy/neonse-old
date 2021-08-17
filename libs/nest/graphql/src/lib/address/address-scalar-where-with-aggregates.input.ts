import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'

@InputType()
export class AddressScalarWhereWithAggregatesInput {
    @Field(() => [AddressScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<AddressScalarWhereWithAggregatesInput>

    @Field(() => [AddressScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<AddressScalarWhereWithAggregatesInput>

    @Field(() => [AddressScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<AddressScalarWhereWithAggregatesInput>

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    profileId?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    email?: StringNullableWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    phone?: StringNullableWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    street?: StringWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    district?: StringNullableWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    city?: StringWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    state?: StringNullableWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    zip?: StringNullableWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    country?: StringWithAggregatesFilter
}
