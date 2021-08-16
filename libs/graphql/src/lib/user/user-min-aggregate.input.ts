import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @HideField()
    id?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @HideField()
    password?: true;

    @HideField()
    jwtToken?: true;

    @HideField()
    resetPasswordToken?: true;

    @HideField()
    identifierToken?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
