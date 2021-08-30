import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';

@ObjectType()
export class UserGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    password!: string;

    @Field(() => Boolean, {nullable:true})
    isEmailConfirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    isMobileConfirmed?: boolean;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => GraphQLJSON, {nullable:true})
    customFields?: any;

    @Field(() => String, {nullable:false})
    jwtToken!: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => String, {nullable:true})
    identifierToken?: string;

    @Field(() => UserCountAggregate, {nullable:true})
    _count?: UserCountAggregate;

    @Field(() => UserMinAggregate, {nullable:true})
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: UserMaxAggregate;
}
