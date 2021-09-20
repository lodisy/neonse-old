import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CardSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
}
