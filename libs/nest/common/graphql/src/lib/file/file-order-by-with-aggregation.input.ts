import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileCountOrderByAggregateInput } from './file-count-order-by-aggregate.input';
import { FileAvgOrderByAggregateInput } from './file-avg-order-by-aggregate.input';
import { FileMaxOrderByAggregateInput } from './file-max-order-by-aggregate.input';
import { FileMinOrderByAggregateInput } from './file-min-order-by-aggregate.input';
import { FileSumOrderByAggregateInput } from './file-sum-order-by-aggregate.input';

@InputType()
export class FileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    caption?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mimeType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    width?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sourceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    autoPlay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    profileAvatarId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    productVariantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reviewId?: keyof typeof SortOrder;

    @Field(() => FileCountOrderByAggregateInput, {nullable:true})
    _count?: FileCountOrderByAggregateInput;

    @Field(() => FileAvgOrderByAggregateInput, {nullable:true})
    _avg?: FileAvgOrderByAggregateInput;

    @Field(() => FileMaxOrderByAggregateInput, {nullable:true})
    _max?: FileMaxOrderByAggregateInput;

    @Field(() => FileMinOrderByAggregateInput, {nullable:true})
    _min?: FileMinOrderByAggregateInput;

    @Field(() => FileSumOrderByAggregateInput, {nullable:true})
    _sum?: FileSumOrderByAggregateInput;
}
