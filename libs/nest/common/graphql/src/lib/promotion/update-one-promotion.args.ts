import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionUpdateInput } from './promotion-update.input';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';

@ArgsType()
export class UpdateOnePromotionArgs {

    @Field(() => PromotionUpdateInput, {nullable:false})
    data!: PromotionUpdateInput;

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;
}
