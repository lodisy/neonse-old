import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SourceWhereInput } from './source-where.input';
import { SourceOrderByWithRelationInput } from './source-order-by-with-relation.input';
import { SourceWhereUniqueInput } from './source-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SourceCountAggregateInput } from './source-count-aggregate.input';
import { SourceMinAggregateInput } from './source-min-aggregate.input';
import { SourceMaxAggregateInput } from './source-max-aggregate.input';

@ArgsType()
export class SourceAggregateArgs {

    @Field(() => SourceWhereInput, {nullable:true})
    where?: SourceWhereInput;

    @Field(() => [SourceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SourceOrderByWithRelationInput>;

    @Field(() => SourceWhereUniqueInput, {nullable:true})
    cursor?: SourceWhereUniqueInput;

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
