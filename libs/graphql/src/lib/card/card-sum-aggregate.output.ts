import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CardSumAggregate {

    @Field(() => String, {nullable:true})
    number?: bigint | number;
}
