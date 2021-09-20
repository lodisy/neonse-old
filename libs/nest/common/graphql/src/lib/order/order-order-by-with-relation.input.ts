import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OrderAddressOrderByWithRelationInput } from '../order-address/order-address-order-by-with-relation.input';
import { OrderItemOrderByRelationAggregateInput } from '../order-item/order-item-order-by-relation-aggregate.input';
import { PaymentOrderByWithRelationInput } from '../payment/payment-order-by-with-relation.input';

@InputType()
export class OrderOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    placedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pending?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => OrderAddressOrderByWithRelationInput, {nullable:true})
    address?: OrderAddressOrderByWithRelationInput;

    @Field(() => OrderItemOrderByRelationAggregateInput, {nullable:true})
    items?: OrderItemOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    totalQuantity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subTotal?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subTotalWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    total?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalWithTax?: keyof typeof SortOrder;

    @Field(() => PaymentOrderByWithRelationInput, {nullable:true})
    payment?: PaymentOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    tracking?: keyof typeof SortOrder;
}
