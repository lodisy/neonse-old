import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumContentTypeWithAggregatesFilter } from '../prisma/enum-content-type-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class LikeScalarWhereWithAggregatesInput {

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => [LikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LikeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    profileId?: StringWithAggregatesFilter;

    @Field(() => EnumContentTypeWithAggregatesFilter, {nullable:true})
    type?: EnumContentTypeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    productId?: StringNullableWithAggregatesFilter;
}
