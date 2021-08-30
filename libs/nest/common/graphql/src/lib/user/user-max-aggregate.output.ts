import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    password?: string;

    @Field(() => Boolean, {nullable:true})
    isEmailConfirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    isMobileConfirmed?: boolean;

    @Field(() => Date, {nullable:true})
    lastLoginAt?: Date | string;

    @Field(() => Date, {nullable:true})
    lastLogoutAt?: Date | string;

    @Field(() => String, {nullable:true})
    accessToken?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    resetPasswordToken?: string;

    @Field(() => String, {nullable:true})
    identifierToken?: string;
}
