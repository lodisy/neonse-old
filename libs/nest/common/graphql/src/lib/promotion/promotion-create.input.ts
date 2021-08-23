import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionListCreateNestedOneWithoutItemsInput } from '../promotion-list/promotion-list-create-nested-one-without-items.input';

@InputType()
export class PromotionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    startAt?: Date | string;

    @Field(() => Date, {nullable:true})
    endAt?: Date | string;

    @Field(() => String, {nullable:false})
    couponCode!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    enabled?: boolean;

    @Field(() => Int, {nullable:true})
    perCustomerUsageLimit?: number;

    @Field(() => PromotionListCreateNestedOneWithoutItemsInput, {nullable:false})
    promotionList!: PromotionListCreateNestedOneWithoutItemsInput;
}
