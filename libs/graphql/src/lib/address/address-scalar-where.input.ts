import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AddressScalarWhereInput {

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    AND?: Array<AddressScalarWhereInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    OR?: Array<AddressScalarWhereInput>;

    @Field(() => [AddressScalarWhereInput], {nullable:true})
    NOT?: Array<AddressScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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
