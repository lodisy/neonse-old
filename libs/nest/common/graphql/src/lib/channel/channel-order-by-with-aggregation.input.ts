import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChannelCountOrderByAggregateInput } from './channel-count-order-by-aggregate.input';
import { ChannelMaxOrderByAggregateInput } from './channel-max-order-by-aggregate.input';
import { ChannelMinOrderByAggregateInput } from './channel-min-order-by-aggregate.input';

@InputType()
export class ChannelOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    token?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    defaultLanguageCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    priceIncludeTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => ChannelCountOrderByAggregateInput, {nullable:true})
    _count?: ChannelCountOrderByAggregateInput;

    @Field(() => ChannelMaxOrderByAggregateInput, {nullable:true})
    _max?: ChannelMaxOrderByAggregateInput;

    @Field(() => ChannelMinOrderByAggregateInput, {nullable:true})
    _min?: ChannelMinOrderByAggregateInput;
}
