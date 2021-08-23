import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionUpdateWithoutPromotionListInput } from './promotion-update-without-promotion-list.input';

@InputType()
export class PromotionUpdateWithWhereUniqueWithoutPromotionListInput {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionUpdateWithoutPromotionListInput, {nullable:false})
    data!: PromotionUpdateWithoutPromotionListInput;
}
