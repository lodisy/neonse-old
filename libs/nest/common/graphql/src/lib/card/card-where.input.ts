import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BigIntFilter } from '../prisma/big-int-filter.input';

@InputType()
export class CardWhereInput {

    @Field(() => [CardWhereInput], {nullable:true})
    AND?: Array<CardWhereInput>;

    @Field(() => [CardWhereInput], {nullable:true})
    OR?: Array<CardWhereInput>;

    @Field(() => [CardWhereInput], {nullable:true})
    NOT?: Array<CardWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

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
