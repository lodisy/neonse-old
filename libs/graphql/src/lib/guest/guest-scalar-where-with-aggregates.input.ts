import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class GuestScalarWhereWithAggregatesInput {

    @Field(() => [GuestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GuestScalarWhereWithAggregatesInput>;

    @Field(() => [GuestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GuestScalarWhereWithAggregatesInput>;

    @Field(() => [GuestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GuestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifierToken?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    email?: StringNullableWithAggregatesFilter;
}
