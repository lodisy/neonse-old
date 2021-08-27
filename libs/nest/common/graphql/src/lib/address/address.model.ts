import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Profile } from '../profile/profile.model';
import { GraphQLJSON } from 'graphql-type-json';

/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
/** 地址 */
@ObjectType({description:'地址'})
export class Address {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Profile, {nullable:true})
    Profile?: Profile;
    @Field(() => String, {nullable:true})
    profileId!: string | null;
    @Field(() => String, {nullable:false})
    fullname!: string;
    @Field(() => String, {nullable:true})
    email!: string | null;
    @Field(() => String, {nullable:true})
    phone!: string | null;
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
    @Field(() => Boolean, {nullable:true,defaultValue:true})
    default!: boolean | null;
    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
