import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionListAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    total?: true;
}
