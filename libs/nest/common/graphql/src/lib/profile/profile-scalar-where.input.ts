import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
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

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

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
