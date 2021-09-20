import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';

@InputType()
export class PaymentOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    method?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transactionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    errorMessage?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    metadata?: keyof typeof SortOrder;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
}
