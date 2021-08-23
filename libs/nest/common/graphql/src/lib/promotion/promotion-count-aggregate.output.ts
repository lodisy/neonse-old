import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    startAt!: number;

    @Field(() => Int, {nullable:false})
    endAt!: number;

    @Field(() => Int, {nullable:false})
    couponCode!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    enabled!: number;

    @Field(() => Int, {nullable:false})
    perCustomerUsageLimit!: number;

    @Field(() => Int, {nullable:false})
    promotionListId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
