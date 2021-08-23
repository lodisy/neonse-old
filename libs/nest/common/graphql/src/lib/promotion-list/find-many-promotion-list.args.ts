import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListWhereInput } from './promotion-list-where.input';
import { PromotionListOrderByInput } from './promotion-list-order-by.input';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PromotionListScalarFieldEnum } from './promotion-list-scalar-field.enum';

@ArgsType()
export class FindManyPromotionListArgs {

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

    @Field(() => [PromotionListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PromotionListScalarFieldEnum>;
}
