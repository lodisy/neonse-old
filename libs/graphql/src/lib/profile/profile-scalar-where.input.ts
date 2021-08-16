import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { HideField } from '@nestjs/graphql';
import { BigIntNullableFilter } from '../prisma/big-int-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ProfileScalarWhereInput {

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    AND?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    OR?: Array<ProfileScalarWhereInput>;

    @Field(() => [ProfileScalarWhereInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereInput>;

    @HideField()
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BigIntNullableFilter, {nullable:true})
    phone?: BigIntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    point?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    level?: IntNullableFilter;
}
