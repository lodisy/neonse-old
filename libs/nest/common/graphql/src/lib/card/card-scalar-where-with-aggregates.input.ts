import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BigIntWithAggregatesFilter } from '../prisma/big-int-with-aggregates-filter.input';

@InputType()
export class CardScalarWhereWithAggregatesInput {

    @Field(() => [CardScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CardScalarWhereWithAggregatesInput>;

    @Field(() => [CardScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CardScalarWhereWithAggregatesInput>;

    @Field(() => [CardScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CardScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    profileId?: StringNullableWithAggregatesFilter;

    @Field(() => BigIntWithAggregatesFilter, {nullable:true})
    number?: BigIntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expiration?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    bank?: StringNullableWithAggregatesFilter;
}
