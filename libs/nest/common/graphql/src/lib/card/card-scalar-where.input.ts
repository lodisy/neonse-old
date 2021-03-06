import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';

@InputType()
export class CardScalarWhereInput {

    @Field(() => [CardScalarWhereInput], {nullable:true})
    AND?: Array<CardScalarWhereInput>;

    @Field(() => [CardScalarWhereInput], {nullable:true})
    OR?: Array<CardScalarWhereInput>;

    @Field(() => [CardScalarWhereInput], {nullable:true})
    NOT?: Array<CardScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => BigIntFilter, {nullable:true})
    number?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiration?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bank?: StringNullableFilter;
}
