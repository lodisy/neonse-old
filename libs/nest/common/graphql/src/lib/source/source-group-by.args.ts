import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceWhereInput } from './source-where.input';
import { SourceOrderByWithAggregationInput } from './source-order-by-with-aggregation.input';
import { SourceScalarFieldEnum } from './source-scalar-field.enum';
import { SourceScalarWhereWithAggregatesInput } from './source-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SourceCountAggregateInput } from './source-count-aggregate.input';
import { SourceMinAggregateInput } from './source-min-aggregate.input';
import { SourceMaxAggregateInput } from './source-max-aggregate.input';

@ArgsType()
export class SourceGroupByArgs {

    @Field(() => SourceWhereInput, {nullable:true})
    where?: SourceWhereInput;

    @Field(() => [SourceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SourceOrderByWithAggregationInput>;

    @Field(() => [SourceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SourceScalarFieldEnum>;

    @Field(() => SourceScalarWhereWithAggregatesInput, {nullable:true})
    having?: SourceScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SourceCountAggregateInput, {nullable:true})
    _count?: SourceCountAggregateInput;

    @Field(() => SourceMinAggregateInput, {nullable:true})
    _min?: SourceMinAggregateInput;

    @Field(() => SourceMaxAggregateInput, {nullable:true})
    _max?: SourceMaxAggregateInput;
}
