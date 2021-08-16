import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

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

    @Field(() => StringFilter, {nullable:true})
    profileId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    productId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    rate?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
