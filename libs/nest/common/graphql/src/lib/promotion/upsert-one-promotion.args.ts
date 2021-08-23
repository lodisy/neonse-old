import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionCreateInput } from './promotion-create.input';
import { PromotionUpdateInput } from './promotion-update.input';

@ArgsType()
export class UpsertOnePromotionArgs {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionCreateInput, {nullable:false})
    create!: PromotionCreateInput;

    @Field(() => PromotionUpdateInput, {nullable:false})
    update!: PromotionUpdateInput;
}
