import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    perCustomerUsageLimit?: true;
}
