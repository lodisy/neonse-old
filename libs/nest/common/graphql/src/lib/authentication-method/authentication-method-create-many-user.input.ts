import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthenticationStrategy } from '../prisma/authentication-strategy.enum';

@InputType()
export class AuthenticationMethodCreateManyUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthenticationStrategy, {nullable:true})
    strategy?: keyof typeof AuthenticationStrategy;
}
