import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class CardWhereInput {

    @Field(() => [CardWhereInput], {nullable:true})
    AND?: Array<CardWhereInput>;

    @Field(() => [CardWhereInput], {nullable:true})
    OR?: Array<CardWhereInput>;

    @Field(() => [CardWhereInput], {nullable:true})
    NOT?: Array<CardWhereInput>;

    @HideField()
    id?: StringFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    cardHolder?: ProfileRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => BigIntFilter, {nullable:true})
    number?: BigIntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiration?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bank?: StringNullableFilter;
}
