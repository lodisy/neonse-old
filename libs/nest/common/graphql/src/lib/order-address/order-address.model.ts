import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Order } from '../order/order.model';

@ObjectType()
export class OrderAddress {
    @Field(() => ID, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    phone!: string | null;
    @Field(() => String, {nullable:false})
    fullname!: string;
    @Field(() => String, {nullable:true})
    company!: string | null;
    @Field(() => String, {nullable:false})
    streetLine1!: string;
    @Field(() => String, {nullable:true})
    streetLine2!: string | null;
    @Field(() => String, {nullable:true})
    district!: string | null;
    @Field(() => String, {nullable:false})
    city!: string;
    @Field(() => String, {nullable:true})
    state!: string | null;
    @Field(() => String, {nullable:true})
    postalCode!: string | null;
    @Field(() => String, {nullable:false})
    country!: string;
    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;
    @Field(() => Order, {nullable:false})
    order?: Order;
    @Field(() => String, {nullable:false})
    orderId!: string;
}
