import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PromotionAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    perCustomerUsageLimit?: true;
}
