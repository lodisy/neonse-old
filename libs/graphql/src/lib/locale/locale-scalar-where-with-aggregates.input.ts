import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LocaleScalarWhereWithAggregatesInput {

    @Field(() => [LocaleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocaleScalarWhereWithAggregatesInput>;

    @Field(() => [LocaleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocaleScalarWhereWithAggregatesInput>;

    @Field(() => [LocaleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocaleScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    code?: StringWithAggregatesFilter;
}
