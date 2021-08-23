import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';
import { PromotionListCreateInput } from './promotion-list-create.input';
import { PromotionListUpdateInput } from './promotion-list-update.input';

@ArgsType()
export class UpsertOnePromotionListArgs {

    @Field(() => PromotionListWhereUniqueInput, {nullable:false})
    where!: PromotionListWhereUniqueInput;

    @Field(() => PromotionListCreateInput, {nullable:false})
    create!: PromotionListCreateInput;

    @Field(() => PromotionListUpdateInput, {nullable:false})
    update!: PromotionListUpdateInput;
}
