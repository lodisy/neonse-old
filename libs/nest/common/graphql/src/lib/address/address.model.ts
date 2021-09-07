import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { Country } from '../country/country.model';
import { GraphQLJSON } from 'graphql-type-json';

/** 地址 */
@ObjectType({description:'地址'})
export class Address {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Profile, {nullable:true})
    Profile?: Profile;

    @Field(() => String, {nullable:true})
    profileId!: string | null;

    @Field(() => String, {nullable:false})
    fullname!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    mobile!: string | null;

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

    @Field(() => Country, {nullable:false})
    country?: Country;

    @Field(() => String, {nullable:false})
    countryId!: string;

    /** 是否作为默认地址 */
    @Field(() => Boolean, {nullable:true,defaultValue:true,description:'是否作为默认地址'})
    default!: boolean | null;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;
}
