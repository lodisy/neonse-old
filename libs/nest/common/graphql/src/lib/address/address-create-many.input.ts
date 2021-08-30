import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class AddressCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    profileId?: string;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsMobilePhone()
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
    @Validator.IsPostalCode()
    postalCode?: string;

    @Field(() => String, {nullable:false})
    country!: string;

    @Field(() => Boolean, {nullable:true})
    default?: boolean;

    @Field(() => GraphQLJSON, {nullable:true})
    @Validator.IsJSON()
    customFields?: any;
}
