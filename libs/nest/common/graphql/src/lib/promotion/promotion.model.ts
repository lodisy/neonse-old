import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PromotionList } from '../promotion-list/promotion-list.model';

/** Promotion */
/** Promotion */
/** Promotion */
@ObjectType({description:'Promotion'})
export class Promotion {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
    @Field(() => Date, {nullable:true})
    startAt!: Date | null;
    @Field(() => Date, {nullable:true})
    endAt!: Date | null;
    @Field(() => String, {nullable:false})
    couponCode!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => Boolean, {nullable:false,defaultValue:true})
    enabled!: boolean;
    @Field(() => Int, {nullable:true})
    perCustomerUsageLimit!: number | null;
    @Field(() => PromotionList, {nullable:false})
    promotionList?: PromotionList;
    @Field(() => String, {nullable:false})
    promotionListId!: string;
}
