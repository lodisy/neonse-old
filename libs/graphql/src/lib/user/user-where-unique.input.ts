import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {

    @HideField()
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @HideField()
    jwtToken?: string;

    @HideField()
    resetPasswordToken?: string;

    @HideField()
    identifierToken?: string;
}
