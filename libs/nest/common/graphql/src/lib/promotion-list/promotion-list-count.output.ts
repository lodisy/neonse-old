import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionListCount {

    @Field(() => Int, {nullable:false})
    items!: number;
}
