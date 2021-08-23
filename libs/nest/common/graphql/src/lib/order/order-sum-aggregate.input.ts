import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalQuantity?: true;

    @Field(() => Boolean, {nullable:true})
    subTotal?: true;

    @Field(() => Boolean, {nullable:true})
    subTotalWithTax?: true;

    @Field(() => Boolean, {nullable:true})
    total?: true;

    @Field(() => Boolean, {nullable:true})
    totalWithTax?: true;
}
