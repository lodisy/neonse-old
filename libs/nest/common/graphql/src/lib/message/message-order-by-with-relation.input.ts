import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ProfileOrderByWithRelationInput } from '../profile/profile-order-by-with-relation.input';

@InputType()
export class MessageOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    by?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    senderId?: keyof typeof SortOrder;

    @Field(() => ProfileOrderByWithRelationInput, {nullable:true})
    to?: ProfileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    receiverId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reported?: keyof typeof SortOrder;
}
