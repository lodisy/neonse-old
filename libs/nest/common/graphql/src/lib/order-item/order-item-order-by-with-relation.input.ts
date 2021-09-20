import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { OrderOrderByWithRelationInput } from '../order/order-order-by-with-relation.input';

@InputType()
export class OrderItemOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sku?: keyof typeof SortOrder;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    image?: FileOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    brands?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    size?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    style?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    unitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPrice?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    discountedUnitPriceWithTax?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quantity?: keyof typeof SortOrder;

    @Field(() => OrderOrderByWithRelationInput, {nullable:true})
    order?: OrderOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fileId?: keyof typeof SortOrder;
}
