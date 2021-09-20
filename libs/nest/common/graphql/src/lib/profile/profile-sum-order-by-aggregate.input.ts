import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ProfileSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;
}
