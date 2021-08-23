import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionListSumAggregate {

    @Field(() => Int, {nullable:true})
    total?: number;
}
