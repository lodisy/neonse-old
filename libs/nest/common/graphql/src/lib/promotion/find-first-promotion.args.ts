import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionWhereInput } from './promotion-where.input';
import { PromotionOrderByInput } from './promotion-order-by.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionScalarFieldEnum } from './promotion-scalar-field.enum';

@ArgsType()
export class FindFirstPromotionArgs {

    @Field(() => PromotionWhereInput, {nullable:true})
    where?: PromotionWhereInput;

    @Field(() => [PromotionOrderByInput], {nullable:true})
    orderBy?: Array<PromotionOrderByInput>;

    @Field(() => PromotionWhereUniqueInput, {nullable:true})
    cursor?: PromotionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PromotionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PromotionScalarFieldEnum>;
}
