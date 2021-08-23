import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ReviewScalarWhereInput {

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    AND?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    OR?: Array<ReviewScalarWhereInput>;

    @Field(() => [ReviewScalarWhereInput], {nullable:true})
    NOT?: Array<ReviewScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    productId?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    rate?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
