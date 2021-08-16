import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ProfileRelationFilter } from '../profile/profile-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

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

    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: ProfileRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    street?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    district?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    city?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    state?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    zip?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    country?: StringFilter;
}
