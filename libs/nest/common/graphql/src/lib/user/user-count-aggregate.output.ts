import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    mobile!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    isEmailConfirmed!: number;

    @Field(() => Int, {nullable:false})
    isMobileConfirmed!: number;

    @Field(() => Int, {nullable:false})
    lastLoginAt!: number;

    @Field(() => Int, {nullable:false})
    customFields!: number;

    @Field(() => Int, {nullable:false})
    jwtToken!: number;

    @Field(() => Int, {nullable:false})
    refreshToken!: number;

    @Field(() => Int, {nullable:false})
    resetPasswordToken!: number;

    @Field(() => Int, {nullable:false})
    identifierToken!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
