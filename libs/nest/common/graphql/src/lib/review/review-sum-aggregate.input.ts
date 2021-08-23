import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReviewSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    rate?: true;
}
