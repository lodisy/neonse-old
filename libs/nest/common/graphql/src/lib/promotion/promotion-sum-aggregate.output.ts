import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionSumAggregate {

    @Field(() => Int, {nullable:true})
    perCustomerUsageLimit?: number;
}
