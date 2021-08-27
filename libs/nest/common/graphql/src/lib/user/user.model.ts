import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { GraphQLJSON } from 'graphql-type-json';
import { AuthenticationMethod } from '../authentication-method/authentication-method.model';
import { Profile } from '../profile/profile.model';

/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
/** User 用户 */
@ObjectType({description:'User 用户'})
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    username!: string | null;
    @HideField()
    password!: string;
    @HideField()
    roles?: Array<Role>;
    @Field(() => Date, {nullable:true})
    lastLoginAt!: Date | null;
    @Field(() => GraphQLJSON, {nullable:true})
    customFields!: any | null;
    @Field(() => [AuthenticationMethod], {nullable:true})
    authenticationMethods?: Array<AuthenticationMethod>;
    @HideField()
    jwtToken!: string;
    @HideField()
    resetPasswordToken!: string | null;
    @HideField()
    identifierToken!: string | null;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => Profile, {nullable:true})
    profile?: Profile;
    @Field(() => String, {nullable:true})
    refreshToken!: string | null;
}
