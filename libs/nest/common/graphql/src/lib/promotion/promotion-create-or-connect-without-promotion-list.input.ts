import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereUniqueInput } from './promotion-where-unique.input';
import { PromotionCreateWithoutPromotionListInput } from './promotion-create-without-promotion-list.input';

@InputType()
export class PromotionCreateOrConnectWithoutPromotionListInput {

    @Field(() => PromotionWhereUniqueInput, {nullable:false})
    where!: PromotionWhereUniqueInput;

    @Field(() => PromotionCreateWithoutPromotionListInput, {nullable:false})
    create!: PromotionCreateWithoutPromotionListInput;
}
