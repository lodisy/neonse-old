import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PromotionListAvgAggregate {

    @Field(() => Float, {nullable:true})
    total?: number;
}
