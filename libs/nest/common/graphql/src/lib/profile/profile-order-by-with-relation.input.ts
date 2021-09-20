import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { BrandOrderByRelationAggregateInput } from '../brand/brand-order-by-relation-aggregate.input';
import { AddressOrderByRelationAggregateInput } from '../address/address-order-by-relation-aggregate.input';
import { CardOrderByRelationAggregateInput } from '../card/card-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { LikeOrderByRelationAggregateInput } from '../like/like-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { ProfileOrderByRelationAggregateInput } from './profile-order-by-relation-aggregate.input';
import { MessageOrderByRelationAggregateInput } from '../message/message-order-by-relation-aggregate.input';

@InputType()
export class ProfileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    mobile?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    avatar?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    point?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    level?: keyof typeof SortOrder;

    @Field(() => BrandOrderByRelationAggregateInput, {nullable:true})
    brands?: BrandOrderByRelationAggregateInput;

    @Field(() => AddressOrderByRelationAggregateInput, {nullable:true})
    addresses?: AddressOrderByRelationAggregateInput;

    @Field(() => CardOrderByRelationAggregateInput, {nullable:true})
    cards?: CardOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => LikeOrderByRelationAggregateInput, {nullable:true})
    likes?: LikeOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    uploads?: FileOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByRelationAggregateInput, {nullable:true})
    followedBy?: ProfileOrderByRelationAggregateInput;

    @Field(() => ProfileOrderByRelationAggregateInput, {nullable:true})
    following?: ProfileOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messagesSent?: MessageOrderByRelationAggregateInput;

    @Field(() => MessageOrderByRelationAggregateInput, {nullable:true})
    messagesReceived?: MessageOrderByRelationAggregateInput;
}
