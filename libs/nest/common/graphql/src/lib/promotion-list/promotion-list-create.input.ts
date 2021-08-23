import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionCreateNestedManyWithoutPromotionListInput } from '../promotion/promotion-create-nested-many-without-promotion-list.input';

@InputType()
export class PromotionListCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => PromotionCreateNestedManyWithoutPromotionListInput, {nullable:true})
    items?: PromotionCreateNestedManyWithoutPromotionListInput;
}
