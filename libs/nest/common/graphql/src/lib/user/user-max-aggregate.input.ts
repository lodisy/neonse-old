import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    mobile?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    password?: true;

    @Field(() => Boolean, {nullable:true})
    isEmailConfirmed?: true;

    @Field(() => Boolean, {nullable:true})
    isMobileConfirmed?: true;

    @Field(() => Boolean, {nullable:true})
    lastLoginAt?: true;

    @Field(() => Boolean, {nullable:true})
    lastLogoutAt?: true;

    @Field(() => Boolean, {nullable:true})
    accessToken?: true;

    @Field(() => Boolean, {nullable:true})
    refreshToken?: true;

    @Field(() => Boolean, {nullable:true})
    resetPasswordToken?: true;

    @Field(() => Boolean, {nullable:true})
    identifierToken?: true;
}
