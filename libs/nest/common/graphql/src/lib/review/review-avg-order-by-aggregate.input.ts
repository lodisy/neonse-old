import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ReviewAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;
}
