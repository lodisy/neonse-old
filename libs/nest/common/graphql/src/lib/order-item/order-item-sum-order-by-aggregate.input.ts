import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderItemSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;
}
