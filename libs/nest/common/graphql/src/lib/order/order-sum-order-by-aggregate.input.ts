import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    totalQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subTotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subTotalWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalWithTax?: keyof typeof SortOrder;
}
