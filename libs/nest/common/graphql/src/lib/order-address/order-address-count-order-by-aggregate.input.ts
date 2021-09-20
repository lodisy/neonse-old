import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OrderAddressCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    company?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetLine1?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    streetLine2?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    district?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    city?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    state?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    postalCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    country?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    customFields?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderId?: keyof typeof SortOrder;
}
