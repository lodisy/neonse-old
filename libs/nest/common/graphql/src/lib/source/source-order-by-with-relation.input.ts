import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';

@InputType()
export class SourceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    link?: keyof typeof SortOrder;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    File?: FileOrderByRelationAggregateInput;
}
