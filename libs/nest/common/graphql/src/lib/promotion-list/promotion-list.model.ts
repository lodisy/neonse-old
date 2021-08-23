import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Promotion } from '../promotion/promotion.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionList {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => [Promotion], {nullable:true})
    items?: Array<Promotion>;
    @Field(() => Int, {nullable:false})
    total!: number;
}
