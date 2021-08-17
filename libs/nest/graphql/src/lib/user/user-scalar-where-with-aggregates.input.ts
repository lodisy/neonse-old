import { Field } from '@nestjs/graphql'
import { InputType } from '@nestjs/graphql'
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input'
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input'
import { HideField } from '@nestjs/graphql'
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input'
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input'

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<UserScalarWhereWithAggregatesInput>

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<UserScalarWhereWithAggregatesInput>

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<UserScalarWhereWithAggregatesInput>

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    id?: StringWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    email?: StringWithAggregatesFilter

    @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
    username?: StringNullableWithAggregatesFilter

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    password?: StringWithAggregatesFilter

    @HideField()
    jwtToken?: StringWithAggregatesFilter

    @HideField()
    resetPasswordToken?: StringNullableWithAggregatesFilter

    @HideField()
    identifierToken?: StringNullableWithAggregatesFilter

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter

    @HideField()
    updatedAt?: DateTimeNullableWithAggregatesFilter
}
