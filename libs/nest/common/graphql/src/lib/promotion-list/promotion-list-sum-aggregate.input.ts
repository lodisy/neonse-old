import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionListSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    total?: true;
}
