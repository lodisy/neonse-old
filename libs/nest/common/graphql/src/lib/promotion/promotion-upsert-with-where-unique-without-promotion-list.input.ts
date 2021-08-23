import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionUpdateWithoutPromotionListInput } from './promotion-update-without-promotion-list.input';
import { PromotionCreateWithoutPromotionListInput } from './promotion-create-without-promotion-list.input';

@InputType()
export class PromotionUpsertWithWhereUniqueWithoutPromotionListInput {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionUpdateWithoutPromotionListInput, {nullable:false})
    update!: PromotionUpdateWithoutPromotionListInput;

    @Field(() => PromotionCreateWithoutPromotionListInput, {nullable:false})
    create!: PromotionCreateWithoutPromotionListInput;
}
