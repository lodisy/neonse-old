import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListWhereInput } from './promotion-list-where.input';
import { PromotionListOrderByInput } from './promotion-list-order-by.input';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionListCountAggregateInput } from './promotion-list-count-aggregate.input';
import { PromotionListAvgAggregateInput } from './promotion-list-avg-aggregate.input';
import { PromotionListSumAggregateInput } from './promotion-list-sum-aggregate.input';
import { PromotionListMinAggregateInput } from './promotion-list-min-aggregate.input';
import { PromotionListMaxAggregateInput } from './promotion-list-max-aggregate.input';

@ArgsType()
export class PromotionListAggregateArgs {

    @Field(() => PromotionListWhereInput, {nullable:true})
    where?: PromotionListWhereInput;

    @Field(() => [PromotionListOrderByInput], {nullable:true})
    orderBy?: Array<PromotionListOrderByInput>;

    @Field(() => PromotionListWhereUniqueInput, {nullable:true})
    cursor?: PromotionListWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PromotionListCountAggregateInput, {nullable:true})
    _count?: PromotionListCountAggregateInput;

    @Field(() => PromotionListAvgAggregateInput, {nullable:true})
    _avg?: PromotionListAvgAggregateInput;

    @Field(() => PromotionListSumAggregateInput, {nullable:true})
    _sum?: PromotionListSumAggregateInput;

    @Field(() => PromotionListMinAggregateInput, {nullable:true})
    _min?: PromotionListMinAggregateInput;

    @Field(() => PromotionListMaxAggregateInput, {nullable:true})
    _max?: PromotionListMaxAggregateInput;
}
