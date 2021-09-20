import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';
import { ProductOrderByWithRelationInput } from '../product/product-order-by-with-relation.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';

@InputType()
export class ReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    by?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    profileId?: keyof typeof SortOrder;

    @Field(() => ProductOrderByWithRelationInput, {nullable:true})
    product?: ProductOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    productId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    uploads?: FileOrderByRelationAggregateInput;
}
