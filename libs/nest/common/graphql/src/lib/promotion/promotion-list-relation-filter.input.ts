import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionWhereInput } from './promotion-where.input';

@InputType()
export class PromotionListRelationFilter {

    @Field(() => PromotionWhereInput, {nullable:true})
    every?: PromotionWhereInput;

    @Field(() => PromotionWhereInput, {nullable:true})
    some?: PromotionWhereInput;

    @Field(() => PromotionWhereInput, {nullable:true})
    none?: PromotionWhereInput;
}
