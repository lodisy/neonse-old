import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ItemScalarWhereWithAggregatesInput {

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    quantity?: IntWithAggregatesFilter;
}
