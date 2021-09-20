import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SourceCountOrderByAggregateInput } from './source-count-order-by-aggregate.input';
import { SourceMaxOrderByAggregateInput } from './source-max-order-by-aggregate.input';
import { SourceMinOrderByAggregateInput } from './source-min-order-by-aggregate.input';

@InputType()
export class SourceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => SourceCountOrderByAggregateInput, {nullable:true})
    _count?: SourceCountOrderByAggregateInput;

    @Field(() => SourceMaxOrderByAggregateInput, {nullable:true})
    _max?: SourceMaxOrderByAggregateInput;

    @Field(() => SourceMinOrderByAggregateInput, {nullable:true})
    _min?: SourceMinOrderByAggregateInput;
}
