import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { OrderAddressCountAggregate } from './order-address-count-aggregate.output';
import { OrderAddressMinAggregate } from './order-address-min-aggregate.output';
import { OrderAddressMaxAggregate } from './order-address-max-aggregate.output';

@ObjectType()
export class OrderAddressGroupBy {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:true})
    company?: string;

    @Field(() => String, {nullable:false})
    streetLine1!: string;

    @Field(() => String, {nullable:true})
    streetLine2?: string;

    @Field(() => String, {nullable:true})
    district?: string;

    @Field(() => String, {nullable:false})
    city!: string;

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => String, {nullable:true})
    postalCode?: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => OrderAddressCountAggregate, {nullable:true})
    _count?: OrderAddressCountAggregate;

    @Field(() => OrderAddressMinAggregate, {nullable:true})
    _min?: OrderAddressMinAggregate;

    @Field(() => OrderAddressMaxAggregate, {nullable:true})
    _max?: OrderAddressMaxAggregate;
}
