import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';

@InputType()
export class AddressWhereInput {

    @Field(() => [AddressWhereInput], {nullable:true})
    AND?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    OR?: Array<AddressWhereInput>;

    @Field(() => [AddressWhereInput], {nullable:true})
    NOT?: Array<AddressWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProfileRelationFilter, {nullable:true})
    Profile?: ProfileRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileId?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    fullname?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    company?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    streetLine1?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    streetLine2?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    district?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    postalCode?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    default?: BoolNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    customFields?: JsonNullableFilter;
}
