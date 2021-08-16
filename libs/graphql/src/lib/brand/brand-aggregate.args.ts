import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandWhereInput } from './brand-where.input';
import { BrandOrderByInput } from './brand-order-by.input';
import { BrandWhereUniqueInput } from './brand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BrandCountAggregateInput } from './brand-count-aggregate.input';
import { BrandAvgAggregateInput } from './brand-avg-aggregate.input';
import { BrandSumAggregateInput } from './brand-sum-aggregate.input';
import { BrandMinAggregateInput } from './brand-min-aggregate.input';
import { BrandMaxAggregateInput } from './brand-max-aggregate.input';

@ArgsType()
export class BrandAggregateArgs {

    @Field(() => BrandWhereInput, {nullable:true})
    where?: BrandWhereInput;

    @Field(() => [BrandOrderByInput], {nullable:true})
    orderBy?: Array<BrandOrderByInput>;

    @Field(() => BrandWhereUniqueInput, {nullable:true})
    cursor?: BrandWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BrandCountAggregateInput, {nullable:true})
    _count?: BrandCountAggregateInput;

    @Field(() => BrandAvgAggregateInput, {nullable:true})
    _avg?: BrandAvgAggregateInput;

    @Field(() => BrandSumAggregateInput, {nullable:true})
    _sum?: BrandSumAggregateInput;

    @Field(() => BrandMinAggregateInput, {nullable:true})
    _min?: BrandMinAggregateInput;

    @Field(() => BrandMaxAggregateInput, {nullable:true})
    _max?: BrandMaxAggregateInput;
}
