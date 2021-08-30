import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { AddressCountAggregate } from './address-count-aggregate.output';
import { AddressMinAggregate } from './address-min-aggregate.output';
import { AddressMaxAggregate } from './address-max-aggregate.output';

@ObjectType()
export class AddressGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

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

    @Field(() => Boolean, {nullable:true})
    default?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

    @Field(() => AddressCountAggregate, {nullable:true})
    _count?: AddressCountAggregate;

    @Field(() => AddressMinAggregate, {nullable:true})
    _min?: AddressMinAggregate;

    @Field(() => AddressMaxAggregate, {nullable:true})
    _max?: AddressMaxAggregate;
}
