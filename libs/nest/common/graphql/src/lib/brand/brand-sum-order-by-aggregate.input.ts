import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BrandSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;
}
