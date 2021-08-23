import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderItemAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    unitPrice?: true;

    @Field(() => Boolean, {nullable:true})
    unitPriceWithTax?: true;

    @Field(() => Boolean, {nullable:true})
    discountedUnitPrice?: true;

    @Field(() => Boolean, {nullable:true})
    discountedUnitPriceWithTax?: true;

    @Field(() => Boolean, {nullable:true})
    quantity?: true;
}
