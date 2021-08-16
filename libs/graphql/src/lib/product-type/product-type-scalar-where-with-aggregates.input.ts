import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ProductTypeScalarWhereWithAggregatesInput {

    @Field(() => [ProductTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProductTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProductTypeScalarWhereWithAggregatesInput>;

    @Field(() => [ProductTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProductTypeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;
}
