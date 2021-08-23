import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionListUpdateInput } from './promotion-list-update.input';
import { PromotionListWhereUniqueInput } from './promotion-list-where-unique.input';

@ArgsType()
export class UpdateOnePromotionListArgs {

    @Field(() => PromotionListUpdateInput, {nullable:false})
    data!: PromotionListUpdateInput;

    @Field(() => PromotionListWhereUniqueInput, {nullable:false})
    where!: PromotionListWhereUniqueInput;
}
