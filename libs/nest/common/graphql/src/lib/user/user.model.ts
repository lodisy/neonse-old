import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { GraphQLJSON } from 'graphql-type-json';
import { AuthenticationMethod } from '../authentication-method/authentication-method.model';
import { Profile } from '../profile/profile.model';

/** User 用户 */
@ObjectType({description:'User 用户'})
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    email!: string;

    /** 带 + 号 */
    @Field(() => String, {nullable:true,description:'带 + 号'})
    mobile!: string | null;

    @Field(() => String, {nullable:true})
    username!: string | null;

    @HideField()
    password!: string;

    /** email 是否 confirmed */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'email 是否 confirmed'})
    isEmailConfirmed!: boolean | null;

    /** 手机号是否 confirmed */
    @Field(() => Boolean, {nullable:true,defaultValue:false,description:'手机号是否 confirmed'})
    isMobileConfirmed!: boolean | null;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => Date, {nullable:true})
    lastLoginAt!: Date | null;

    @Field(() => Date, {nullable:true})
    lastLogoutAt!: Date | null;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;

    @Field(() => [AuthenticationMethod], {nullable:true})
    authenticationMethods?: Array<AuthenticationMethod>;

    @Field(() => String, {nullable:false})
    accessToken!: string;

    @Field(() => String, {nullable:true})
    refreshToken!: string | null;

    @Field(() => String, {nullable:true})
    resetPasswordToken!: string | null;

    @Field(() => String, {nullable:true})
    identifierToken!: string | null;

    @Field(() => Profile, {nullable:true})
    profile?: Profile;
}
