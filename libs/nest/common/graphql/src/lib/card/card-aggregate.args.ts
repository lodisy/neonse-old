import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CardWhereInput } from './card-where.input';
import { CardOrderByWithRelationInput } from './card-order-by-with-relation.input';
import { CardWhereUniqueInput } from './card-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CardCountAggregateInput } from './card-count-aggregate.input';
import { CardAvgAggregateInput } from './card-avg-aggregate.input';
import { CardSumAggregateInput } from './card-sum-aggregate.input';
import { CardMinAggregateInput } from './card-min-aggregate.input';
import { CardMaxAggregateInput } from './card-max-aggregate.input';

@ArgsType()
export class CardAggregateArgs {

    @Field(() => CardWhereInput, {nullable:true})
    where?: CardWhereInput;

    @Field(() => [CardOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CardOrderByWithRelationInput>;

    @Field(() => CardWhereUniqueInput, {nullable:true})
    cursor?: CardWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CardCountAggregateInput, {nullable:true})
    _count?: CardCountAggregateInput;

    @Field(() => CardAvgAggregateInput, {nullable:true})
    _avg?: CardAvgAggregateInput;

    @Field(() => CardSumAggregateInput, {nullable:true})
    _sum?: CardSumAggregateInput;

    @Field(() => CardMinAggregateInput, {nullable:true})
    _min?: CardMinAggregateInput;

    @Field(() => CardMaxAggregateInput, {nullable:true})
    _max?: CardMaxAggregateInput;
}
