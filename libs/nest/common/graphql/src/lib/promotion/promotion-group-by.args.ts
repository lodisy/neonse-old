import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionWhereInput } from './promotion-where.input';
import { PromotionOrderByWithAggregationInput } from './promotion-order-by-with-aggregation.input';
import { PromotionScalarFieldEnum } from './promotion-scalar-field.enum';
import { PromotionScalarWhereWithAggregatesInput } from './promotion-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PromotionCountAggregateInput } from './promotion-count-aggregate.input';
import { PromotionAvgAggregateInput } from './promotion-avg-aggregate.input';
import { PromotionSumAggregateInput } from './promotion-sum-aggregate.input';
import { PromotionMinAggregateInput } from './promotion-min-aggregate.input';
import { PromotionMaxAggregateInput } from './promotion-max-aggregate.input';

@ArgsType()
export class PromotionGroupByArgs {

    @Field(() => PromotionWhereInput, {nullable:true})
    where?: PromotionWhereInput;

    @Field(() => [PromotionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PromotionOrderByWithAggregationInput>;

    @Field(() => [PromotionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PromotionScalarFieldEnum>;

    @Field(() => PromotionScalarWhereWithAggregatesInput, {nullable:true})
    having?: PromotionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PromotionCountAggregateInput, {nullable:true})
    _count?: PromotionCountAggregateInput;

    @Field(() => PromotionAvgAggregateInput, {nullable:true})
    _avg?: PromotionAvgAggregateInput;

    @Field(() => PromotionSumAggregateInput, {nullable:true})
    _sum?: PromotionSumAggregateInput;

    @Field(() => PromotionMinAggregateInput, {nullable:true})
    _min?: PromotionMinAggregateInput;

    @Field(() => PromotionMaxAggregateInput, {nullable:true})
    _max?: PromotionMaxAggregateInput;
}
