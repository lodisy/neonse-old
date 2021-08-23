import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionUncheckedCreateNestedManyWithoutPromotionListInput } from '../promotion/promotion-unchecked-create-nested-many-without-promotion-list.input';

@InputType()
export class PromotionListUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    total!: number;

    @Field(() => PromotionUncheckedCreateNestedManyWithoutPromotionListInput, {nullable:true})
    items?: PromotionUncheckedCreateNestedManyWithoutPromotionListInput;
}
