import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OrderItemMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    sku?: true;

    @Field(() => Boolean, {nullable:true})
    brands?: true;

    @Field(() => Boolean, {nullable:true})
    size?: true;

    @Field(() => Boolean, {nullable:true})
    color?: true;

    @Field(() => Boolean, {nullable:true})
    style?: true;

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

    @Field(() => Boolean, {nullable:true})
    orderId?: true;

    @Field(() => Boolean, {nullable:true})
    fileId?: true;
}
